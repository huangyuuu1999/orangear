<template>
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拽文件到这里 <em>或者点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          文件大小限制1Mb
        </div>
      </template>
    </el-upload>
    <button @click="getPing">Ping</button>
</template>
  
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import request from '../plugins/requestUtil.js'


const getPing = ()=> {
  request.get({
    url: "/api/ping",
    method: "get"
  }).then( res => {
    alert(res.data)
  })
}
</script>


<style scoped>
.upload-demo{
    font-size: large;
}
</style>