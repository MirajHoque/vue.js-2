<template>
  <div>
    <h1>List of Ninjas</h1>
    <ul>
      <li v-for="elements in ninjas">{{ elements}}</li>
    </ul>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoshi','Mario','Ryu']

    }
  },

  }
</script>

<style scoped>
h1{
  color: green;
}
</style>
