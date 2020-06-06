<template>
  <div id="app">
    <router-link to="/foo">To Foo</router-link>
    <router-link to="/bar">To Bar</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'

export default {
  components: { Bar,  Foo}
}
</script>