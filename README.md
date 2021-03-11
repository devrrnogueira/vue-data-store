# vue-data-store
### Simple vue global store

### Install
```
npm install vue-data-store
```

### Creating store
``` javascript
// store.js

// Vue 3
import createStore from 'vue-data-store/hook'

// Vue 2
// import createStore from 'vue-data-store'

const store = createStore({
    count: 1,
    arr: []
})

export default store
```

### Using store data
``` javascript
import store from './store'

//Vue 3
export default {
  setup() {
    const count = store('count')
    const arr = store('arr')

    return {
      count,
      arr
    }
  },
  methods: {
    increment(){
      this.count ++
    },
    add() {
        let l = String.fromCharCode(this.arr.length + 65)
        this.arr.push(l)
    }
  }
}

//Vue 2
export default {
  data:()=>({
      count,
      arr
  }),
  created() {
    this.count = store.attach('count', this)
    this.arr = store.attach('arr', this)
  },
  methods: {
    increment(){
      store.set('count', this.count + 1)
    },
    add() {
        let arr = this.arr
        let l = String.fromCharCode(arr.length + 65)
        
        arr.push(l)
        store.set('arr', arr)
    }
  }
}
```
