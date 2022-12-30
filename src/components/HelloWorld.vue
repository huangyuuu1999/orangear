<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <br>
  <button><a href="https://spring.io/">Spring</a></button>
</template>

<style scoped>

</style>
