<template>
  <div class="d-flex flex-column align-items-center">
    <h4 class="fw-bold">最實用的線上待辦事項服務</h4>

    <form class="form d-flex flex-column align-items-center"
      @submit.prevent>

      <label for="email" class="align-self-start">Email</label>
      <input type="email" name="email" id="email"
        placeholder="請輸入Email">

      <label for="password" class="align-self-start">密碼</label>
      <input type="password" name="password" id="password"
        placeholder="請輸入密碼">

      <button type="submit" class="btn btn-dark">
        登入
      </button>

    </form>

    <router-link to="/register" class="text-dark fw-bold mt-4">
      註冊帳號
    </router-link>

  </div>
</template>

<style lang="scss" scoped>
form {
  max-width: 304px;
}
</style>
