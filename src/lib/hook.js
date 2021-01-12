import { ref, watch, onUnmounted } from 'vue'


export default function createStore(data = null) {
    let uidIndex = 0
    let store = data || {}
    let refs = {}
    
    return function useStore(key) {
        let uid = uidIndex++
        let value = ref(store[key])
        let def
    
        refs[key] = def = refs[key] || {}
        def[uid] = value
        
        watch(value, (newValue) => {
            let k
            
            store[key] = newValue
    
            for (k in def){
                if (k == uid) continue
                def[k].value = newValue
            }
        })
    
        onUnmounted(()=>{
            delete (def[uid])
        })
    
        return ref(value)
    }
}
