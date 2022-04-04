<template>
  <nav class="navbar d-flex justify-content-between align-items-center">

    <BrandLogo />

    <div class="d-flex align-items-center">

      <h6 class="mb-0 fw-bold me-4">王小明的待辦</h6>

      <button type="button"
        class="btn p-2"
        @click="logout">
        登出
      </button>

    </div>

  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BrandLogo from '@/components/BrandLogo.vue'
import Cookie from 'js-cookie'
import { Toast } from '@/mixins/toast'

const router = useRouter()

const logout = async () => {
  const api = 'https://todoo.5xcamp.us/users/sign_out'
  const leave = fetch(api, {
    method: 'DELETE',
    headers: { Authorization: Cookie.get('5x-todo') }
  })

  try {
    const res = await leave
    const data = await res.json()
    if (res.ok) {
      Toast.fire({
        title: data.message,
        icon: 'success'
      })
      Cookie.remove('5x-todo')
      router.push('/')
    } else {
      Toast.fire({
        title: data.message,
        icon: 'error'
      })
    }
  } catch (error) {
    console.log('logout error', error)
  }
}
</script>
