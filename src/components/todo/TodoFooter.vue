<template>
  <footer class="todo-footer d-flex justify-content-between align-items-center">

    <span>
      {{ unfinishedTodos.length }} 個待完成項目
    </span>

    <button type="button" class="btn p-0">
      清除已完成項目
    </button>

  </footer>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useTodoStore from '@/stores/todoStore'

const todoStore = useTodoStore()
const { unfinishedTodos } = storeToRefs(todoStore)
</script>
