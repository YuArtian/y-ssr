import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from './store'

export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}

/* CSR */
// let app = new Vue({
//   el: '#app',
//   render: h => h(App)
// })
