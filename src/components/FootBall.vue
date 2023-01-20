<template>
    <div class="movie-item">
        <img :src="props.movieInfo.imgId" alt="">
        <span>{{ props.movieInfo.movieName }}</span>
        <hr>
        <div>
            <p>{{ props.movieInfo.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    movieInfo: Object
})
</script>

<style scoped>
.movie-item {
    font-size: larger;
    font-weight: bolder;
    border-radius: 5px;
    /* padding: 20px; */
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

.movie-item:hover {
    background: rgba(79, 75, 75, 0.5);
    border-radius: 0;
}

.movie-item img:hover {
    opacity: 0.2;
}
</style>
