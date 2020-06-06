import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore(){
  const store = new Vuex.Store({
    state: {
      name: 'default name'
    },
    mutations: {
      changeName(state, payload){
        state.name = payload
      }
    },
    actions: {
      fetchName({commit}){
        return new Promise((resolve, reject)=>{
          setTimeout(() => {
            commit('changeName', 'Yu')
            resolve()
          }, 3000)
        })
      }
    },
  })
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }
  return store
}