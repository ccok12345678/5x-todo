<template>
  <nav class="navbar d-flex justify-content-between align-items-center">

    <BrandLogo />

    <div class="d-flex align-items-center">

      <h6 class="mb-0 fw-bold me-4">王小明的待辦</h6>

      <button type="button"
        class="btn p-2">
        登出
      </button>

    </div>

  </nav>
</template>

<script setup>
import BrandLogo from '@/components/BrandLogo.vue'
</script>
