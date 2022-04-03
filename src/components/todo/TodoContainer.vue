<template>
  <main class="todo-container">

    <header class="todo-head">
      <TodoInput />
    </header>

    <div class="todo-body mt-3">

      <TodoTabs />

      <TodoItems />

      <TodoFooter />
    </div>

    <NoTodo v-if="false" />

  </main>
</template>

<script setup>
import TodoInput from './TodoInput.vue'
import TodoTabs from './TodoTabs.vue'
import TodoItems from './TodoItems.vue'
import TodoFooter from './TodoFooter.vue'
import NoTodo from './NoTodo.vue'
</script>
