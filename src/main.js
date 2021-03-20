import Vue from 'vue'
//import vue in itself 
import App from './App.vue'
//import Hi from './App.vue'

import vueResource from 'vue-resource'
//vue-resource store in node modules
Vue.use(vueResource);

import vueRouter from 'vue-router'
//vue-router stored in node module
Vue.use(vueRouter);
import Routes from './routes';
const router= new vueRouter({
  routes: Routes,
  mode:'history' //default mode hash
  //history: never show '#' in url

});

Vue.filter('snippet',function(value){
  return value.slice(0,100)+ "...";
})


new Vue({
  el: '#app',
  
  render: h => h(App), //render App.vue with id #app
  //render: h => h(Hi)
  //render method:
  // h=>h(basically rendering App.vue to el:'#app')
  router:router, // this router is const variable
  
  

})
