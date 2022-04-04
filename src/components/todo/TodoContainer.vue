<template>
  <main class="todo-container">

    <header class="todo-head">
      <TodoInput />
    </header>

    <div class="todo-body mt-3" v-if="todoStore.todoList.length">

      <TodoTabs />

      <TodoItems />

      <TodoFooter />
    </div>

    <NoTodo v-else/>

  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import TodoInput from './TodoInput.vue'
import TodoTabs from './TodoTabs.vue'
import TodoItems from './TodoItems.vue'
import TodoFooter from './TodoFooter.vue'
import NoTodo from './NoTodo.vue'
import { getTodo } from '@/methods/todo'
import useTodoStore from '@/stores/todoStore'

const todoStore = useTodoStore()

onMounted(async () => {
  try {
    todoStore.todoList = await getTodo()
  } catch (error) {
    console.log('get error', error)
  }
})

</script>
