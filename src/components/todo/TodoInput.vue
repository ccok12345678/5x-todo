<template>
  <form @submit.prevent class="form">

    <label for="addTodo" class="visually-hidden">
      輸入待辦
    </label>

    <div class="todo-input-group d-flex align-items-center">

      <input
        type="text"
        id="addTodo"
        name="addTodo"
        placeholder="新增代辦事項"
        class="">

      <button class="btn p-0" type="button">
        <img src="@/assets/images/plus_button.svg" alt="plus button">
      </button>

    </div>
  </form>
</template>

<style lang="scss" scoped>

</style>
