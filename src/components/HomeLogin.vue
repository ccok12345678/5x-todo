<template>
  <div class="d-flex flex-column align-items-center">
    <h4 class="fw-bold mb-4 align-self-start">最實用的線上待辦事項服務</h4>

    <form class="form d-flex flex-column align-items-center w-100"
      @submit.prevent="submitLogin">

      <label for="email" class="align-self-start">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="請輸入Email"
        required
        v-model="user.email">
      <small class="invalid-msg text-danger align-self-start">
        請輸入正確格式
      </small>

      <label for="password" class="align-self-start">密碼</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="請輸入密碼"
        required
        v-model="user.password">
      <small class="invalid-msg text-danger align-self-start">
        此欄位不可為空
      </small>

      <button type="submit" class="btn btn-dark mt-2">
        登入
      </button>

    </form>

    <router-link to="/register" class="text-dark fw-bold mt-4">
      註冊帳號
    </router-link>

  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Cookie from 'js-cookie'
import Swal from 'sweetalert2'
import checkLogin from '@/methods/checkLogin'
import { Toast } from '@/mixins/toast'
import useUserStore from '@/stores/UserStore'

const router = useRouter()

const user = reactive({
  email: '',
  password: ''
})

onMounted(async () => {
  if (await checkLogin()) {
    router.push('/todo')
  }
})

const userName = useUserStore()

const submitLogin = async () => {
  const { email, password } = user
  const url = 'https://todoo.5xcamp.us/users/sign_in'
  const login = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: { email, password } })
  })

  try {
    const res = await login
    const data = await res.json()
    if (res.ok) {
      console.log(data)
      const authorization = [...res.headers][0][1]
      Cookie.set('5x-todo', authorization)
      Cookie.set('5x-nickname', data.nickname)

      userName.$patch({ name: data.nickname })

      Toast.fire({
        icon: 'success',
        title: data.message
      })

      router.push('/todo')
    } else {
      Swal.fire({
        titleText: data.message,
        text: '請輸入正確資料或註冊',
        icon: 'error'
      })
    }
  } catch (error) {
    console.log('login error:', error)
  }
}
</script>

<style lang="scss" scoped>
form {
  max-width: 304px;
}
</style>
