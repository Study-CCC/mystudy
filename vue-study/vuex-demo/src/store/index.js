import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter: 200,
        stu:[{name:'aaa',age:12},{name:'bbb',age:30},{name:'ccc',age:25}]
    },
    mutations:{},
    getters:{
        totalCount(state){
            return state.counter+1
        },
        getAge(state){
            return age=>{
                return state.stu.filter(s=>s.age>age)
            }
        }
    },
    actions:{
        increament(){
            
        }
    }
})

export default store