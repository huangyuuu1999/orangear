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
  <button>
    <router-link to="/home/3">Go to Home</router-link>
  </button>
  <button>
    <router-link to="/about">Go to About</router-link>
  </button>
  <br>
  <router-view></router-view>
</template>

<style scoped>

</style>
