import { ref } from 'vue'

export default function createStore(data) {
    let store = data
    let refs = {}
    
    Object.keys(store).forEach(key => {
        refs[key] = ref(store[key])
    })

    return function useStore(key) {
        return refs[key]
    }
}