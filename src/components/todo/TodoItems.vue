<template>
  <ul class="todo-items-list">
    <li class="d-flex justify-content-between align-items-center todo-item">

      <div class="d-flex align-items-center">

        <button type="button"
          class="btn btn-check me-3"
          @click="isDone = !isDone"
          :class="{ 'done': isDone }"
          title="Done!"
        ></button>

        <span
          :class="{ 'done': isDone }"
        >把冰箱發霉的檸檬拿去丟</span>

      </div>

      <button type="button" class="btn" title="刪除">
        <img src="@/assets/images/x_icon.svg" alt="cancel icon">
      </button>

    </li>

  </ul>
</template>

<script setup>
import { ref } from 'vue'

const isDone = ref(false)
</script>
