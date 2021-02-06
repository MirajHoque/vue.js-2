import Vue from 'vue'
//import vue in itself 
import App from './App.vue'
//import Hi from './App.vue'

new Vue({
  el: '#app',
  
  render: h => h(App) //render App.vue with id #app
  //render: h => h(Hi)
  //render method:
  // h=>h(basically rendering App.vue to el:'#app')
})
