<template>
    <div class="d-flex flex-column align-items-center">
    <h4 class="fw-bold align-self-start">註冊帳號</h4>

    <form class="form d-flex flex-column align-items-center"
      @submit.prevent>

      <label for="email" class="align-self-start">Email</label>
      <input type="email" name="email" id="email"
        placeholder="請輸入Email">

      <label for="nickname" class="align-self-start">您的暱稱</label>
      <input type="text" name="nickname" id="nickname"
        placeholder="請輸入您的暱稱">

      <label for="password" class="align-self-start">密碼</label>
      <input type="password" name="password" id="password"
        placeholder="請輸入密碼">

      <label for="password" class="align-self-start">再次輸入密碼</label>
      <input type="password" name="password" id="password"
        placeholder="請再次輸入輸入密碼">

      <button type="submit" class="btn btn-dark">
        註冊帳號
      </button>

    </form>

    <router-link to="/" class="text-dark fw-bold mt-4">
      登入
    </router-link>

  </div>
</template>
