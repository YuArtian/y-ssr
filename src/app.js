import Vue from 'vue'
import App from './App.vue'

export default () => {
  let app = new Vue({
    el: '#app',
    render: h => h(App)
  })
  return { app }
}

/* CSR */
// let app = new Vue({
//   el: '#app',
//   render: h => h(App)
// })
