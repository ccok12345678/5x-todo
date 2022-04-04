<template>
  <ul class="todo-items-list">

    <li v-for="todo in todoList" :key="todo.id"
      class="d-flex justify-content-between align-items-center todo-item">

      <div class="d-flex align-items-center">

        <button type="button"
          class="btn btn-check me-3"
          @click="handleClick(todo.id, toggleTodo)"
          :class="{ 'done': todo.completed_at }"
          title="Done!"
        ></button>

        <span :class="{ 'done': todo.completed_at }">
          {{ todo.content }}
        </span>

      </div>

      <button type="button" class="btn" title="刪除"
        @click='handleClick(todo.id, removeTodo)'
      >
        <img src="@/assets/images/x_icon.svg" alt="cancel icon">
      </button>

    </li>

  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { removeTodo, getTodo, toggleTodo } from '@/methods/todo'
import useTodoStore from '@/stores/todoStore'

const todoStore = useTodoStore()
const { todoList } = storeToRefs(todoStore)

const handleClick = async (todoId, func) => {
  try {
    const res = await func(todoId)
    const data = res.json()
    if (res.ok) {
      todoList.value = await getTodo()
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    console.log('remove error:', error)
  }
}

</script>
