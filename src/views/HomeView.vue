<template>
  <div class="d-flex justify-content-center vh-100 bg-primary">

    <div class="w-100 d-flex flex-column justify-content-center align-items-end">

      <div class="d-flex flex-column align-items-center left">

        <BrandLogo class="mb-3 " />

        <img
          src="@/assets/images/board_illustration.svg"
          alt="online todo list"
          class="image-fluid"
          >

      </div>

    </div>

    <div class="w-100 d-flex justify-content-center align-items-center">

      <router-view></router-view>

    </div>

  </div>
</template>

<script setup>
import BrandLogo from '../components/BrandLogo.vue'
</script>

<style lang="scss" scoped>
.left {
  width: 83.333%;
  max-width: 386px;
}
</style>
