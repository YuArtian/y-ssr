<template>
  <div>
    {{this.name}}
    <button @click="this.changeName">change name</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData(store){
    console.log('asdsads')
    return store.dispatch('fetchName')
  },
  computed: {
    ...mapState(['name'])
  },
  methods: {
    changeName(){
      this.$store.commit('changeName', 'new name')
    }
  },
}
</script>