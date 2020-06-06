import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'

export default context => {
  const router = createRouter()
  const app = new Vue({
    // el: '#app',
    router,
    render: h => h(App)
  })
  return { app, router }
}

/* CSR */
// let app = new Vue({
//   el: '#app',
//   render: h => h(App)
// })
