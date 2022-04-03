<template>
  <main class="todo-container">

    <header class="todo-head">
      <TodoInput />
    </header>

    <div class="todo-body mt-3">

      <TodoTabs />

      <TodoItems />

    </div>

  </main>
</template>

<script setup>
import TodoInput from './TodoInput.vue'
import TodoTabs from './TodoTabs.vue'
import TodoItems from './TodoItems.vue'
</script>
