<template>
  <nav class="navbar d-flex justify-content-between align-items-center">

    <BrandLogo />

    <div class="d-flex align-items-center">

      <h6 class="mb-0 fw-bold me-4">
        {{ user.name || nickname }} 的待辦
      </h6>

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
import { Toast } from '@/mixins/toast'
import Cookie from 'js-cookie'
import useUserStore from '@/stores/userStore'
import BrandLogo from '@/components/BrandLogo.vue'

const router = useRouter()
const user = useUserStore()
const nickname = Cookie.get('5x-nickname')

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
      Cookie.remove('5x-nickname')
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
