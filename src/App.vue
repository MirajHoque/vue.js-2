<template>
<div>
  <app-header :title="title"></app-header>
  <app-ninjas :ninjas="ninjas"></app-ninjas>
  
  <!--
    <app-ninjas name="data(value)"></app-ninjas>
    <hr/>
    <hr>: define themetic break
  -->
  <app-footer :title="title"></app-footer>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas
  },
  data () {
    return{
       ninjas:[ //araray
        {name:'Ryu',speciality:'Vue Components',show:'false'}, //objects
        {name:'Crystal',speciality:'Html Wizardy',show:'false'},
        {name:'Hitushi',speciality:'Conditionals',show:'false'},
        {name:'Tango',speciality:'Click Events',show:'false'},
        {name:'Kami',speciality:'Web Pack',show:'false'},
        {name:'Yoshi',speciality:'Data Mining',show:'falses'}
      ],
      //when show is false never show speciality if it is true then show speciality
      title: 'Vue Ninjas'

    }

    }
  }

</script>

<style>
</style>
