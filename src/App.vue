<template>
  <div>
    <h1>{{title}}</h1>
    <P>{{greeting()}}</P>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue.js 2'

    }
  },
  methods:{
    greeting:function(){
      return 'Hello vue'
    }
  }

}
</script>

<style>
</style>
