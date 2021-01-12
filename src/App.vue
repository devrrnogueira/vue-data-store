<template>
  <h1>App [ {{ count }} ]</h1>
  <div>
      <div 
        class="box"
        @click="remove(index)"
        v-for="(i, index) in arr" :key="i">
        {{i}}
      </div>
  </div>

  <ComponentA v-if="!removed"/>
  <h1 v-else>Component removed</h1>
  
  <ComponentA />
  
  <button @click="increment">increment</button>
  <button @click="toggle">remove/restore</button>
</template>

<script>
import { ref } from 'vue'
import store from './store'
import ComponentA from './Component.vue'

export default {
  name: 'App',
  components: {
    ComponentA
  },
  setup() {
    const count = store('count')
    const arr = store('arr')
    const removed = ref(false)

    console.log('App setup()')

    return {
      count,
      arr,
      removed
    }
  },
  methods: {
    increment(){
      this.count ++
    },
    toggle(){
      this.removed = !this.removed
    },
    remove(index){
      this.arr.splice(index, 1)
    }
  }
}
</script>
