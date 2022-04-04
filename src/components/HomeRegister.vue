<template>
    <div class="d-flex flex-column align-items-center">
    <h4 class="fw-bold align-self-start mb-4">註冊帳號</h4>

    <form class="form d-flex flex-column align-items-center w-100"
      @submit.prevent="submitRegister">

      <label for="email" class="align-self-start">Email</label>
      <input type="email" name="email" id="email"
        placeholder="請輸入Email" required
        v-model="user.email">
      <small class="invalid-msg text-danger align-self-start">
        此欄位不可為空
      </small>

      <label for="nickname" class="align-self-start">您的暱稱</label>
      <input type="text" name="nickname" id="nickname"
        placeholder="請輸入您的暱稱" required
        v-model="user.nickname">
      <small class="invalid-msg text-danger align-self-start">
        此欄位不可為空
      </small>

      <label for="password" class="align-self-start">密碼</label>
      <input type="password" name="password" id="password"
        placeholder="請輸入密碼" required
        v-model="user.password">
      <small class="invalid-msg text-danger align-self-start">
        此欄位不可為空
      </small>

      <label for="password" class="align-self-start">再次輸入密碼</label>
      <input type="password" name="password" id="password"
        placeholder="請再次輸入輸入密碼" required
        v-model="checkPassword.password">
      <small class="invalid-msg text-danger align-self-start">
        此欄位不可為空
      </small>

      <button type="submit" class="btn btn-dark mt-2">
        註冊帳號
      </button>

    </form>

    <router-link to="/" class="text-dark fw-bold mt-4">
      登入
    </router-link>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

const user = reactive({
  email: '',
  nickname: '',
  password: ''
})

const checkPassword = reactive({
  password: ''
})

const submitRegister = async () => {
  if (user.password !== checkPassword.password) {
    Swal.fire({
      text: '請輸入相同的密碼',
      icon: 'info'
    })
    return
  }

  const api = 'https://todoo.5xcamp.us/users'
  const register = fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: user })
  })

  try {
    const res = await register
    const data = await res.json()
    if (res.ok) {
      Swal.fire({
        titleText: data.message,
        text: `歡迎${data.nickname}!請再次登入`,
        icon: 'success'
      })
      router.push({ name: 'login' })
    } else {
      Swal.fire({
        titleText: data.message,
        text: '請重新註冊',
        icon: 'error'
      })
    }
  } catch (error) {
    console.error('register', error)
  }
}
</script>

<style lang="scss" scoped>
form {
  max-width: 304px;
}
</style>
