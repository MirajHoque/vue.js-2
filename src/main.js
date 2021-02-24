import Vue from 'vue'
//import vue in itself 
import App from './App.vue'
//import Hi from './App.vue'
export const bus=new Vue();
//import vue liabrary and export a instace of it.

new Vue({
  el: '#app',
  
  render: h => h(App) //render App.vue with id #app
  //render: h => h(Hi)
  //render method:
  // h=>h(basically rendering App.vue to el:'#app')
})
