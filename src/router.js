import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./components/Foo.vue')
      },
      {
        path: '/foo',
        component: () => import('./components/Foo.vue')
      },
      {
        path: '/bar',
        component: () => import('./components/Bar.vue')
      },
      {
        path: '/name',
        component: () => import('./components/Name.vue')
      },
    ],
  })
}