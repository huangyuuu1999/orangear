<template>
    <div class="movie-item">
        <div class="upper-column">
            <span>{{ props.movieInfo.movieName }}</span>
            <!-- <el-button type="primary" :icon="Edit" plain /> -->
            <el-button @click="open2" :icon="Delete" plain  color="rgba(79, 75, 75, 0.5)"/>
        </div>
        <img :src="props.movieInfo.imgId" alt="">
        <hr>
        <div>
            <p>{{ props.movieInfo.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const props = defineProps({
    movieInfo: Object
})

const open2 = () => {
  ElNotification({
    title: '删除展示卡片',
    message: h('i', { style: 'color: teal' }, '卡片已删除...'),
  })
}
</script>

<style scoped>
.movie-item {
    font-size: larger;
    font-weight: bolder;
    border-radius: 5px;
    margin-top: 10px;
    width: 400px;
    height: 330px;
    color: rgb(255, 255, 255);
    opacity: 0.7;
    transition-duration: 0.4s;
    position: relative;
    overflow: hidden;
}
.movie-item p {
    padding-top: 20px;
    font-size: 14px;
}

.movie-item img {
    margin: 0;
    position: absolute;
    left: -50px;

    width: 450px;
    z-index: -1;
}   

.upper-column{
    display: flex;
    justify-content: space-between;
}


.movie-item:hover {
    background: rgba(79, 75, 75, 0.5);
    border-radius: 0;
}

.movie-item img:hover {
    opacity: 0.2;
}
</style>
