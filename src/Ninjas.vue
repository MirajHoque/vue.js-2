<template>
  <div>
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

<style>
</style>
