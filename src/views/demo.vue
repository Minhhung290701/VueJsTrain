<template>
    <div @click="tinhToado">
        <button @click="plus">Plus</button> 
        <button @click="minus">Minus</button>
        <input v-on:keyup.enter="plus">
        <p>{{num}}</p>
        <p>{{message}}</p>
        <p>{{x}} - {{y}}</p>
        <p>{{ssss}}</p>
        <button @click="testAxios">axi</button>
        <span>Thông điệp có nhiều dòng:</span>
            <p style="white-space: pre-line;">{{ message1 }}</p>
            <br>
            <textarea v-model="message1" placeholder="Nhập văn bản có nhiều dòng"></textarea>

    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'name',
    data() {
        return {
            x:0,
            y:0,
            num:0,
            message: 'người đông bến đợi thuyền xuôi ngược',
            ssss:0
        };
    },

    methods: {
        plus() {
            this.num++
        } ,
        minus() {
            this.num--
        },
        reversedMessage: function () {
        // `this` trỏ tới đối tượng vm
            this.message = this.message.split(' ').reverse().join(' ')
        },
        tinhToado(event){
            this.x = event.clientX,
            this.y = event.clientY
        },
        testAxios: async function() {
            let sss = await axios.get('http://localhost:8601/facebook')
            this.ssss= sss.data
            console.log(this.ssss)
        }

    }
}
</script>