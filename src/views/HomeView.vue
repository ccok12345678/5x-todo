<template>
  <HelloWorld :msg="msg"></HelloWorld>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'

const msg = 'Hello Rabbit'
</script>
