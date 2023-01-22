<template>
    <div class="toolbox">
        <div v-for="i in toolkitArr" class="toolkit">工具{{ i }}</div>
    </div>
</template>

<script setup>

const toolkitArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

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
    font-size: 50px;
}
</style>