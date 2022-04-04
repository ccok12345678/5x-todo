<template>
  <div class="bg-main container-fluid min-vh-100">

    <Navbar></Navbar>

    <div class="d-flex justify-content-center">
      <TodoContainer />
    </div>

  </div>
</template>

<script setup>
import Navbar from '@/components/todo/TodoNavbar.vue'
import TodoContainer from '@/components/todo/TodoContainer.vue'
</script>
