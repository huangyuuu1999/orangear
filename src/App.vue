<script setup>
import LeftBar from './components/LeftBar.vue'
</script>

<template>
  <div class="app"> 
    <!-- <HelloWorld msg="Hello, Dinner 2023." /> -->
    <LeftBar></LeftBar>
    <div class="dashboard">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.dashboard{
    margin-left: 20px;
    background-color: rgba(204, 182, 182, 0.3);
    width: 1300px;
    height: 750px;
    border-radius: 10px;
    padding: 10px ;
}
</style>
