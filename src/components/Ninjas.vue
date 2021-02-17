<template>
  <div id="ninjas">
    <ul>
        <li v-for="elements in ninjas" v-on:click="elements.show= !elements.show">
          <h2>{{ elements.name }}</h2>
          <h3 v-show="elements.show">{{ elements.speciality }}</h3>
        </li>
     </ul>
</div>
</template>

<script>

export default {

  data () {
    return{
      ninjas:[ //araray
        {name:'Ryu',speciality:'Vue Components',show:'false'}, //objects
        {name:'Crystal',speciality:'Html Wizardy',show:'false'},
        {name:'Hitushi',speciality:'Conditionals',show:'false'},
        {name:'Tango',speciality:'Click Events',show:'false'},
        {name:'Kami',speciality:'Web Pack',show:'false'},
        {name:'Yoshi',speciality:'Data Mining',show:'falses'}
      ]
      //when show is false never show speciality if it is true then show speciality
      //

    }

    }
  }

</script>

<style scoped>
#ninjas{
  width: 100%;
  max-width: 1200px;
  margin: px auto;
  padding: 0 px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;

}
</style>
