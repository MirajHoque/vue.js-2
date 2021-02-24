<template>
  <div id="ninjas">
    <ul>
        <li v-for="elements in ninjas" v-bind:key="elements" @click="elements.show= !elements.show">
          <h2>{{ elements.name }}</h2>
          <h3 v-show="elements.show">{{ elements.speciality }}</h3>
        </li>
     </ul>
     <button @click="deleteNinja">Delete ninja</button>
</div>
</template>

<script>

export default {
  /*props: ['ninjas'],
  props: [which props we want to receive]
  */
  props:{
    ninjas:{ //props we want to receive
      type: Array,
      required: true
    }
  },
  data () {
    return{
     

    }

    },
    methods:{
      deleteNinja: function()
      {
        this.ninjas.pop();
      }
    },
    //lifecycle hooks
    beforeCreate(){
      alert('beforeCreate');

    },
    created(){
      alert('created');
    },
    beforeMount(){
      alert('before mount');
    },
    mounted(){
      alert('mounted');
    },
    beforeUpdate(){
      alert('before update');
    },
    updated(){
      alert('updated');
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
