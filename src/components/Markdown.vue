<template>
    <div class="show-markdown">
        <div>
            <el-input v-model="textarea" :rows="34" type="textarea" placeholder="输入富文本内容"/>
        </div>
        <div class="content" v-html="markdownToHtml"></div>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { marked } from 'marked';

const files = reactive({
    markdowns: [
        {
            title: 'Kubernetes 指南',
            content: "### k8s文档 "
        },
        {
            title: 'Go语言标准库',
            content: "### Golang std lib"
        }
    ]
})

const textarea = ref("试着写些markdown或其他文本文件")

const markdownToHtml = computed(
    // () => marked(files.markdowns[0].content)
    () => marked(textarea.value)
)

</script>

<style scoped>
.show-markdown {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
}

.show-markdown div {
    width: 600px;
    height: 720px;
}
.content {
    padding-left: 30px;
    padding-top: 10px;
    border: 2px, dotted, tomato;
    background-color: rgba(109, 153, 130, .15);
    overflow: hidden;
}
</style>