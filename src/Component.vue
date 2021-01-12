<template>
    <div class="component">
        <h2>Component [ {{ count }} ]</h2>
        <button @click="add">add</button>
        <div>
            <div v-for="i in arr" :key="i" class="box">{{i}}</div>
        </div>
    </div>
</template>

<script>
import store from './store'

export default {
    setup(){
        const count = store('count')
        const arr = store('arr')

        console.log('Component setup()')

        return {
            count,
            arr
        }
    },
    methods: {
        add() {
            let l = String.fromCharCode(this.arr.length + 65)
            this.arr.push(l)
        }
    }
}
</script>

<style>
    .component {
        border: solid blue;
        padding: 2px;
        margin: 2px;
    }
    .box {
        display: inline-block;
        border: solid 1px red;
        padding: 2px;
        margin: 2px;
        cursor: pointer;
    }
</style>