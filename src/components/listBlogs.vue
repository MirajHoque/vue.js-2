<template>
<div id="show-blogs">
  <!--
    v-theme:column
    directive:argument
  -->
  <h1>List Blogs Title</h1>
  <input type="text" v-model="search" placeholder="search blogs">

  <div v-for="element in filteredBlogs" :key=element class="single-blog">
    <h2 v-rainbow>{{ element.title | to-uppercase }}</h2>
  </div>
 
</div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
//dont need to write searchMixin.js cause it knows it's a js file

export default {
  data() {
    return {
      blogs: [],
      search: ''
    

    }
  },
  methods:{
    
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      //console.log(data);
      this.blogs= data.body.slice(0,10)
    });
  },
  computed:{

  },
  filters:{ //Registering filter locally
    'to-uppercase': function(value){
      //name of the filter: a function
      return value.toUpperCase();
      /*
       //can be done by like this approach(confused to understand this approach)
     toUppercase(value){
       return value.toLowerCase();
       */
     }
     
    },
  directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color="#"+ Math.random().toString(16).slice(2,8);
        }
      }
    },
  mixins:[searchMixin]

  }

</script>

<style>

#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>>


