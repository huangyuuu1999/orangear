<template>
    <div class="toolbox">
        <div v-for="i in toolkitArr" class="toolkit">
            工具{{ i }}
        <el-input v-model="timeStampShow"/>
        <el-button type="primary" @click="getTimeStamp">TimeStamp</el-button>
        <hr>
        <!-- <el-button type="success" @click="copy">复制</el-button> -->
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import useClipboard from 'vue-clipboard3'
const toolkitArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

let timeStampShow = ref('')

const getTimeStamp = ()=>{
    timeStampShow.value = new Date().getTime()/1000
}


const { toClipboard } = useClipboard()

const copy = async() =>{
    try{
        await toClipboard(timeStampShow.value)
        console.log('Copied to clipboard')
    }catch(e) {
        alert('fail')
    }
}

</script>

<style scoped>
.toolbox {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.toolkit {
    margin-top: 30px;
    margin-left: 30px;
    width: 160px;
    height: 160px;
    background-color: rgba(159, 138, 80, 0.2);
    border-radius: 5px;
}

.toolkit:hover {
    border-radius: 10px;
    background-color: rgba(159, 138, 80, 0.6);
    transition: 0.5s;
    font-size: 10px;
}
</style>