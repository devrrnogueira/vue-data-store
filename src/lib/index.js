
export default function createStore(store) {
    const instances = {}
    const Store = {
        attach(key, instance, _default) {
            let value

            instance.$on('unmounted', ()=>{
                console.log('xxx - unmounted')
            })
            instances[key] = instances[key] || {}
            instances[key][instance._uid] = instance

            value = store[key] == undefined ? _default : store[key]
            instance[key] = value

            return value
        },
        dettach(key, instance) {
            delete (instances[key][instance._uid])
        },
        set(key, value) {
            let i, instance
            let list = instances[key]

            store[key] = value

            if (list) {
                for (i in list) {
                    instance = list[i]

                    if (instance._isDestroyed) {
                        delete (list[i])
                        continue
                    }

                    instance[key] = value
                }
            }
        },
        get(key) {
            return store[key]
        }
    }

    return Store
}
