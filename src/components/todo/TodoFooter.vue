<template>
  <footer class="todo-footer d-flex justify-content-between align-items-center">

    <span>
      {{ unfinishedTodos.length }} 個待完成項目
    </span>

    <button type="button" class="btn p-0"
      @click="removeAllFinished">
      清除已完成項目
    </button>

  </footer>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import Cookie from 'js-cookie'
import useTodoStore from '@/stores/todoStore'

const todoStore = useTodoStore()
const { unfinishedTodos, finishedTodos } = storeToRefs(todoStore)

const authorization = Cookie.get('5x-todo')

const removeAllFinished = async () => {
  const removeAll = finishedTodos.value.map(todo => {
    return fetch(`https://todoo.5xcamp.us/todos/${todo.id}`, {
      method: 'DELETE',
      headers: { Authorization: authorization }
    })
  })

  Promise.all(removeAll)
    .then(async (res) => {
      await todoStore.getTodoData()
    })
    .catch(err => console.log('remove all error', err))
}
</script>
