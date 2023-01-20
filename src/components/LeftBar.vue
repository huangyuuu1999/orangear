<script setup>
</script>

<template>
<div class="shell">
    <router-link to="/home/3" class="box"> <img src="/send.png" alt="">  </router-link>
    <router-link to="/home/4" class="box"> <img src="/picture.png" alt="">  </router-link>
    <router-link to="/about" class="box"> <img src="/secure.png" alt="">  </router-link>
    <router-link to="/upload" class="box"> <img src="/db.png" alt="">  </router-link>
    <router-link to="/setting" class="box"> <img src="/setting.png" alt="">  </router-link>
    <a href="#" class="box"> <img src="/qrcode.png" alt="">  </a>
    <a href="#" class="box"> <img src="/exit-red.png" alt="">  </a>
</div>
</template>

<style>
.shell{
    width: 70px;
    height: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    border-radius: 8px;
    position: relative;
    transition: 0.5s;
    overflow: hidden;
    box-shadow: rgba(202, 197, 197, 0.2) 1px -1px;
}

.box{
    margin-left: 15px;
    display: block;
    height: 15%;
    width: 85%;
    margin: 9px;
    transition: .3s;
}

.box img{
    width: 30px;
    height: 30px;
    font-size: 60px;
    margin: 28px 12px;
}

a{
    font-weight: 200;
    background-color: rgba(204, 182, 182, 0.1);
    border-radius: 10px;
}
.shell:hover{
    width: 200px;
    
}

.box:hover{
    width: 200px;
    background-color: rgba(204, 182, 182, 0.45);
    transition: 0.4s;
}
</style>