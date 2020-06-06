<template>
  <div class="foo" @click="click">
    Foo
    <button @click="this.toName">Foo To Name</button>
  </div>
</template>
<script>
export default {
  methods: {
    click(){
      console.log('click!!!')
    },
    toName(){
      this.$router.push('/name')
    }
  }
}
</script>
<style>
.foo{
  color: red;
}
</style>