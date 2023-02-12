<script setup lang="ts">
import { ElMessage, ElMessageBox, ElInput } from 'element-plus'
import { reactive, nextTick, ref } from 'vue';
import axios from "axios"
import request from '../plugins/requestUtil.js'

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

let heroInfo = reactive({
  info:[
    {Name:"成吉思汗",Age:54,Attack:93,Wise:85,DynamicTags:['1', '2', '3']},
    {Name:"汉武帝",Age:58,Attack:92,Wise:89,DynamicTags:['4', '5', 'Tag 3']}
  ]
})

const getInfo = ()=>{
  request({
    url: "/api/info",
    method: "get"
  }).then(
    res => {
      heroInfo.info = res.data.info
    }
  )
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}


const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}

</script>

<template>
    <h1>About Page.</h1>
    <el-button text @click="open">点击获取信息</el-button>
    <el-button @click="getInfo">点击获取信息</el-button>
    <div>
      <el-table :data="heroInfo.info" style="width: 100%">
        <el-table-column prop="Name" label="姓名" width="180"/>
        <el-table-column label="评价" width="400">
          <template #default="scope">
            <el-tag
              v-for="tag in scope.row.DynamicTags"
              :key="tag"
              class="mx-1"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="InputRef"
              v-model="inputValue"
              class="ml-1 w-20"
              size="small"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
            <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
              + New Tag
            </el-button>
          </template>
        </el-table-column>  
        <el-table-column prop="Age" label="年龄" width="80" />
        <el-table-column prop="Attack" label="统帅值"/>
        <el-table-column prop="Wise" label="智慧值" />
        <el-table-column prop="Attack" label="综合能力" width="80"/>
        <el-table-column label="操作" width="300">
          <el-button type="success">赞一下</el-button>
          <el-button type="info">删除</el-button>
          <el-button type="warning">踩一脚</el-button>
        </el-table-column>
      </el-table>
    
    </div>
    <div class="pagenation">
      <el-pagination
        small
        background: false
        layout="prev, pager, next"
        :total="50"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
</template>

<style>
</style>
