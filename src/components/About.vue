<script setup>
import { affixProps, ElMessage, ElMessageBox } from 'element-plus'
import { reactive } from 'vue';
import axios from "axios"

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

const heroInfo = reactive({
  info:[
    {Name:"成吉思汗",Age:54,Attack:93,Wise:85},
    {Name:"汉武帝",Age:58,Attack:92,Wise:89}
  ]
})

const getInfo = ()=>{
  axios.get("http://localhost:80/api/info").then(
    res => {
      heroInfo = res.data
    }
  )
}

</script>

<template>
    <h1>About Page.</h1>
    <el-button text @click="open">点击获取信息</el-button>
    <el-button @click="getInfo">点击获取信息</el-button>
    <div>
      <el-table :data="heroInfo.info" style="width: 100%">
        <el-table-column prop="Name" label="姓名" width="180" />
        <el-table-column prop="Age" label="年龄" width="180" />
        <el-table-column prop="Attack" label="统帅值" />
        <el-table-column prop="Wise" label="智慧值" />
        <el-table-column prop="Attack" label="综合能力" />
        <el-table-column label="操作" width="300">
          <el-button type="success">赞一下</el-button>
          <el-button type="info">删除</el-button>
          <el-button type="warning">踩一脚</el-button>
        </el-table-column>
      </el-table>
    </div>
</template>

<style>
</style>
