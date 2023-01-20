<script setup>
import { reactive, ref } from 'vue';

const ballBoard = reactive({
    title: "世界杯热度排行",
    players: [
        {
            name: "莱昂纳多 梅西",
            vote: 1222221414
        },
        {
            name: "C 罗纳尔多",
            vote: 1234444142
        },
        {
            name: "内马尔",
            vote: 899990041
        },
    ],
    teams: [
        {
            name: "阿根廷",
            vote: 1222221414
        },
        {
            name: "巴西",
            vote: 122221414
        },
        {
            name: "德国",
            vote: 12222414
        },
    ]
})

let showColumn = ref("player")

const changeColumn = () => {
    console.log("change show column.")
    console.log("change before "+showColumn.value);
    if (showColumn.value == "player"){
        showColumn.value = "team"
    }else{
        showColumn.value = "player"
    }
    console.log("change after "+showColumn.value);
}
</script>

<template>
    <h2>Home Page {{ $route.params.id }}</h2>
    <div class="football-wrapper">
        <div class="football">
            <button @click="changeColumn">点击切换</button>
            <h3>{{ ballBoard.title }}-{{ showColumn }}</h3>
            <div v-if="showColumn == 'player'">
                <div v-for="player in ballBoard.players" class="item">{{ player.name }}-{{ player.vote }}</div>
            </div> 
            <div v-else>
                <div v-for="team in ballBoard.teams" class="item">{{ team.name }}-{{ team.vote }}</div>
            </div>
        </div>
        <div class="football">
            <button @click="changeColumn">点击切换</button>
            <h3>{{ ballBoard.title }}-{{ showColumn }}</h3>
            <div v-if="showColumn == 'player'">
                <div v-for="player in ballBoard.players" class="item">{{ player.name }}-{{ player.vote }}</div>
            </div> 
            <div v-else>
                <div v-for="team in ballBoard.teams" class="item">{{ team.name }}-{{ team.vote }}</div>
            </div>
        </div>
        <div class="football">
            <button @click="changeColumn">点击切换</button>
            <h3>{{ ballBoard.title }}-{{ showColumn }}</h3>
            <div v-if="showColumn == 'player'">
                <div v-for="player in ballBoard.players" class="item">{{ player.name }}-{{ player.vote }}</div>
            </div> 
            <div v-else>
                <div v-for="team in ballBoard.teams" class="item">{{ team.name }}-{{ team.vote }}</div>
            </div>
        </div>
        <div class="football">
            <button @click="changeColumn">点击切换</button>
            <h3>{{ ballBoard.title }}-{{ showColumn }}</h3>
            <div v-if="showColumn == 'player'">
                <div v-for="player in ballBoard.players" class="item">{{ player.name }}-{{ player.vote }}</div>
            </div> 
            <div v-else>
                <div v-for="team in ballBoard.teams" class="item">{{ team.name }}-{{ team.vote }}</div>
            </div>
        </div>
        <div class="football">
            <button @click="changeColumn">点击切换</button>
            <h3>{{ ballBoard.title }}-{{ showColumn }}</h3>
            <div v-if="showColumn == 'player'">
                <div v-for="player in ballBoard.players" class="item">{{ player.name }}-{{ player.vote }}</div>
            </div> 
            <div v-else>
                <div v-for="team in ballBoard.teams" class="item">{{ team.name }}-{{ team.vote }}</div>
            </div>
        </div>
        <div class="football">
            <button @click="changeColumn">点击切换</button>
            <h3>{{ ballBoard.title }}-{{ showColumn }}</h3>
            <div v-if="showColumn == 'player'">
                <div v-for="player in ballBoard.players" class="item">{{ player.name }}-{{ player.vote }}</div>
            </div> 
            <div v-else>
                <div v-for="team in ballBoard.teams" class="item">{{ team.name }}-{{ team.vote }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.football-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.football{
    margin-top: 10px;
    background-color: rgba(12, 12, 12, .3);
    font-size: larger;
    border-radius: 5px;
    padding: 20px;
    width: 400px;
}
.item{
    background-color: rgb(90, 108, 73);
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
}
.item:hover{
    background-color: rgb(102, 154, 51);
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bolder;
}
</style>