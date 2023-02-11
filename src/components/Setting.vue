<template>
  <!-- <button @click="getSiteFromDb">kk</button> -->
  <el-space wrap>
    <el-card v-for="site in sites.likes" class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ site.name }}</span>
          <span>{{ site.visited }}</span>
          <el-button class="button" :icon="Delete" plain @click="removeFromSites(site.id)"></el-button>
        </div>
      </template>
      <div class="ops">
        <el-link :href="site.url" :icon="Pointer">dive</el-link>
        <el-button class="button" :icon="Star" plain></el-button>
        <el-button class="button" :icon="Menu" plain @click="getSiteFromDb"></el-button>
        <el-button class="button" :icon="Delete" plain></el-button>
      </div>
    </el-card>
    <el-card class="add-box-card">
        <div style="height: 150px;">
            <el-button 
            :icon="Plus" 
            size="large" 
            type="" 
            text="plain" 
            style="margin-left: 85px; margin-top: 30px" @click="dialogFormVisible = true">
            </el-button>
        </div>
    </el-card>
  </el-space>

  <el-dialog v-model="dialogFormVisible" title="新增收藏夹">
    <el-form :model="form">
      <el-form-item label="站点名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="站点URL" :label-width="formLabelWidth">
        <el-input v-model="form.url" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addFormToSites">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.box-card {
    width: 280px;
    height: 150px;
    margin-left: 20px;
    margin-top: 20px;
}

.add-box-card {
    width: 280px;
    height: 150px;
    margin-left: 20px;
    margin-top: 20px;
}

.card-header{
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.card-header span {
    line-height: 30px;
}

.ops {
    display: flex;
    justify-content: space-between;
}

</style>

<script setup>
import { reactive, ref } from "vue"
import { Delete, Pointer, Star, Menu, CirclePlusFilled, Plus, CirclePlus } from '@element-plus/icons-vue'
import request from "../plugins/requestUtil";

const sites = reactive({ 
    likes: [
        {
            id: 1,
            name: "Python文档",
            url: "https://docs.python.org/3/library/index.html",
            visited: 10,
        },
        {
            id: 2,
            name: "Python-cook-book",
            url: "https://python3-cookbook.readthedocs.io/zh_CN/latest/index.html",
            visited: 23,
        },
        {
            id: 3,
            name: "kubernetes-doc",
            url: "https://kubernetes.io/zh-cn/docs/home/",
            visited: 34,
        },
        {
            id: 4,
            name: "Golang入门指南",
            url: "http://books.studygolang.com/the-way-to-go_ZH_CN/07.1.html",
            visited: 12,
        },
        {
            id: 5,
            name: "七牛云代理",
            url: "https://goproxy.cn",
            visited: 6,
        },
        {
            id: 6,
            name: "jenkins控制台",
            url: "http://182.160.7.230:8080/",
            visited: 89,
        },
        {
            id: 7,
            name: "Element-plus组件",
            url: "https://element-plus.gitee.io/zh-CN/component/",
            visited: 17,
        },
    ]
})

const getSiteFromDb = ()=>{
  request({
    url: "/api/sites",
    method: "get"
  }).then( res => {
      sites.likes = res.data.info
      alert(res.data.info)
      console.log(res.data.info);
    }).catch( es => {
      alert(res.message)
    })
}

const dialogFormVisible = ref(false)
const formLabelWidth = '120px'

const form = reactive({
  name: '',
  url: '',
})

const addFormToSites = ()=>{
    dialogFormVisible.value = false
    request({
      url: "/api/sites",
      method: "post",
      data: {
        name: form.name,
        url: form.url
      }
    }).then( res => {
      ElNotification({
        title: '新增收藏站点！',
        message: h('i', { style: 'color: teal' }, '新增:' + res.data.id),
      })
    }).catch( res => {
      ElNotification({
        title: '新增收藏站点！',
        message: h('i', { style: 'color: teal' }, '新增失败'),
      })
    })
}

const removeFromSites = (id)=>{
    console.log(id)
    for(let i=0; i<sites.likes.length; i++){
        if (sites.likes[i].id == id){
            sites.likes.slice(sites.likes[i])
        }
    }
    alert(sites.likes.length)
}


</script>