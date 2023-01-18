<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <hr>
  <LeftBar></LeftBar>
  <div class="buttons"></div>
    <button>
      <router-link to="/home/3">Go to Home</router-link>
    </button>
    <button>
      <router-link to="/about">Go to About!</router-link>
    </button>
  <hr>
  <router-view class="view"></router-view>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-around;
}

.buttons button {
  font-size: 20px;
}
router-view {
  width: 70%;
}
h1 {
  color: tomato;
}
</style>
