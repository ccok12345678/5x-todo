<template>
  <ul class="d-flex todo-tabs">
    <li class="w-100">

      <button
        type="button"
        class="btn text-center w-100 fw-bold"
        @click="filter = 'all'"
        :class="{ 'active': filter === 'all'}">
        全部
      </button>

    </li>
    <li class="w-100">

      <button
        type="button"
        class="btn text-center w-100 fw-bold"
        @click="filter = 'unfinished'"
        :class="{ 'active': filter === 'unfinished'}">
        待完成
      </button>

    </li>
    <li class="w-100">

      <button
        type="button"
        class="btn text-center w-100 fw-bold"
        @click="filter = 'finished'"
        :class="{ 'active': filter === 'finished'}">
        已完成
      </button>

    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useTodoStore from '@/stores/todoStore'

const todoStore = useTodoStore()
const { filter } = storeToRefs(todoStore)
</script>
