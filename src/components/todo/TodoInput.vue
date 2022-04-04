<template>
  <form @submit.prevent="handleSubmit" class="form">

    <label for="addTodo" class="visually-hidden">
      輸入待辦
    </label>

    <div class="todo-input-group d-flex align-items-center">

      <input
        type="text"
        id="addTodo"
        name="addTodo"
        placeholder="新增代辦事項"
        class=""
        v-model="todo">

      <button class="btn p-0" type="submit">
        <img src="@/assets/images/plus_button.svg" alt="plus button">
      </button>

    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { addTodo, getTodo } from '@/methods/todo'
import useTodoStore from '@/stores/todoStore'

const todo = ref('')

const todoStore = useTodoStore()

const handleSubmit = async () => {
  try {
    const res = await addTodo(todo.value)
    const data = await res.json()
    if (res.ok) {
      todoStore.todoList = await getTodo()
      todo.value = ''
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    console.log('add error', error)
  }
}

</script>
