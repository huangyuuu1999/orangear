<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.alert('您点击了按钮，展示此弹框', 'ElementUI-plus.', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>

<template>
    <h1>About Page.</h1>
    <el-button text @click="open">Click to open the Message Box</el-button>
</template>

<style>
</style>