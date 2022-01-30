<template>
    <div id="message">
        <ul>
            <li v-for="message in message" :key="message.mesage">
                <div class="title"><h1>{{message.subject}}</h1></div>
                <div class="text"><p>{{message.message}}</p></div>
                <div class="date"><p class="date">{{message.display}}</p></div>
            </li>
        </ul>
    </div>
</template>

<script>
import messagesData from './messages.json';

    export default {
        data() {
            return {
                message: messagesData
            }
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #message{
        width: 100vw;
        height: 100vh;
        background-color: white !important;
        overflow: scroll;
    }

    #message li {
        display: flex;
        width: 100%;
        height: 7vh;
        border-bottom: 0.1px solid #520C08;
    }

    .title{
        display: flex;
        font-size: 10px;
        width: 30vw;
        margin-left: 5px;
        float: left;
    }

    .subject{
        bottom: 0;
    }
</style>