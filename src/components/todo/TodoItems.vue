<template>
  <ul class="todo-items-list">

    <li v-for="todo in todoList" :key="todo.id"
      class="d-flex justify-content-between align-items-center todo-item">

      <div class="d-flex align-items-center">

        <button type="button"
          class="btn btn-check me-3"
          @click="isDone = !isDone"
          :class="{ 'done': isDone }"
          title="Done!"
        ></button>

        <span :class="{ 'done': isDone }">
          {{ todo.content }}
        </span>

      </div>

      <button type="button" class="btn" title="刪除">
        <img src="@/assets/images/x_icon.svg" alt="cancel icon">
      </button>

    </li>

  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useTodoStore from '@/stores/todoStore'

const todoStore = useTodoStore()
const { todoList } = storeToRefs(todoStore)

const isDone = ref(false)
</script>
