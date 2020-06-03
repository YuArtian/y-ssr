<template>
  <div class="foo" @click="click">Foo</div>
</template>
<script>
export default {
  methods: {
    click(){
      console.log('click!!!')
    },
  }
}
</script>
<style>
.foo{
  color: red;
}
</style>