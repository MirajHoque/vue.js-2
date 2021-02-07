import Vue from 'vue'
//import vue in itself 
import App from './App.vue'
//import Hi from './App.vue'

import Ninjas from './Ninjas.vue'
Vue.component('ninjas',Ninjas); //Registering vue component globally

new Vue({
  el: '#app',
  //property
  
  render: h => h(App) //render App.vue with id #app
  //render: h => h(Hi)
  //render method:
  // h=>h(basically rendering App.vue to el:'#app')
})
