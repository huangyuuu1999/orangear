<script setup>
import { reactive, ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
import FootBall from './FootBall.vue';

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
const movies = [
    {
        movieName: "肖申克的救赎[美]",
        description: "《肖申克的救赎》（英语：The Shawshank Redemption）是1994年的美国剧情片，由弗兰克·德拉邦特编剧并导演，根据斯蒂芬·金1982年中篇小说《丽塔海华丝与肖申克监狱的救赎》改编。影片讲述银行家安迪·杜弗伦（蒂姆·罗宾斯）因涉嫌谋杀夫人及其情夫被判无期徒刑，进入肖申克州立监狱服刑后，他与能为狱友走私各种违禁商品的埃利斯·“瑞德”·雷丁（摩根·弗里曼）成为朋友，同时利用金融才能为典狱长塞缪尔·诺顿（鲍勃·冈顿）等监狱官员和看守洗钱逃税的故事。其他演员包括威廉·托马斯·桑德勒、克兰西·布朗、吉尔·贝罗斯和詹姆斯·惠特摩。",
        imgId: "/movies/shawshank.jpeg"
    },
    {
        movieName: "霸王别姬",
        description: "《霸王别姬》（英语：Farewell My Concubine）改编自李碧华同名小说，由陈凯歌执导，张国荣、巩俐、张丰毅主演的电影。叙述伶人程蝶衣对国粹艺术的执著，进而投影出历史与文化在大时代的演变下，造成的激荡与人生。影片蕴含深厚的文化内涵，气势恢宏，感情强烈，情节细腻深远。",
        imgId: "/movies/Bawangbieji.jpeg"
    },
    {
        movieName: "菊次郎的夏天",
        description: "暑假到来，自幼丧父的小学三年级学生正男（关口雄介饰），如今和奶奶生活在一起，暑假特别无聊。他拿出母亲从外地寄回的信，准备自己一个人去爱知县丰桥市看望母亲。",
        imgId: "/movies/jucilang.webp"
    },
    {
        movieName: "情书",
        description: "電影敘述著一封原本出于哀思而寄往天國的情书，卻大出意料收到同名同姓的回信，并且逐渐挖掘出一段深埋多年却始终沉静的纯真单恋，真相大白之后前尘往事与今时爱恋缠绕出了一段痴情凄美的挚爱情深。",
        imgId: "/movies/loveletter.jpeg"
    },
    {
        movieName: "喜剧之王",
        description: "《喜剧之王》是星辉海外有限公司出品的一部喜剧电影，由李力持、周星驰执导，周星驰、 莫文蔚、张柏芝等主演。该片于1999年2月13日在香港上映。影片讲述对喜剧情有独钟的尹天仇与舞女柳飘飘逐渐产生感情",
        imgId: "/movies/xijuzhiwang.jpeg",
    }
]

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

const input3 = ref("")
</script>

<template>
    <div class="football-header">
        <h2>Home{{ $route.params.id }}</h2>
        <el-input v-model="input3" placeholder="搜索" class="input-with-select" :suffix-icon="Search">
        </el-input>
    </div>
    <div class="football-wrapper">
        <FootBall :movieInfo=movies[0]></FootBall>
        <FootBall :movieInfo=movies[1]></FootBall>
        <FootBall :movieInfo=movies[2]></FootBall>
        <FootBall :movieInfo=movies[3] :style="{color: '#322'}"></FootBall>
        <FootBall :movieInfo=movies[4]></FootBall>
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

.football-header {
    display: flex;
    justify-content: space-between;
}
.input-with-select {
  background-color: var(--el-fill-color-blank);
  width: 400px;
}
</style>