<template>
<header>
<h1 @click="changeTitle">{{ title }}</h1>
</header>

</template>

<script>
export default {
  props:{
    title: {
      type: String
    }
  },
  data () {
    return{
      title:'Vue Ninjas'

    }

    },
    methods:{
      changeTitle: function(){
        this.$emit('changeTitle','vue wizards');
        //$emit('name of the events', data passing with events);
        //$emit(): function allows to pass customs events

      }
    }
  }

</script>

<style scoped>
header{
  background-color: lightgreen;
  padding: 10px; 
}
h1{
  color: #222;
  text-align: center;
}
</style>
