<template>
  <div class="d-flex flex-column align-items-center">
    <h4 class="fw-bold mb-4 align-self-start">最實用的線上待辦事項服務</h4>

    <form class="form d-flex flex-column align-items-center w-100"
      @submit.prevent>

      <label for="email" class="align-self-start">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="請輸入Email"
        required>
      <small class="invalid-msg text-danger align-self-start">
        此欄位不可為空
      </small>

      <label for="password" class="align-self-start">密碼</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="請輸入密碼"
        required>
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

<style lang="scss" scoped>
form {
  max-width: 304px;
}
</style>
