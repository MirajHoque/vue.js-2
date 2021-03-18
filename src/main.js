import Vue from 'vue'
//import vue in itself 
import App from './App.vue'
//import Hi from './App.vue'

import vueResource from 'vue-resource'
//vue-resource store in node modules
Vue.use(vueResource);

//custom directive(globally creating)
Vue.directive('rainbow',{
  bind(el,binding,vnode){ //bind(): it fires when the directive bound to the elments
    //vnode: refer to virtual node on the dom.
    //binding: refer to information about connection.
    //el: refer to elements itself
    el.style.color="#" + Math.random().toString().slice(2,8);
    //element.style poperty of the elements.which property we want to style  
  } 
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth= "1200px";
    }
    else if(binding.value=='narrow'){
      el.style.maxWidth= "560px";
    }
    if(binding.arg=='column'){
      el.style.background="#ddd",
      el.style.padding= "20px";
    }
  }
})

new Vue({
  el: '#app',
  
  render: h => h(App) //render App.vue with id #app
  //render: h => h(Hi)
  //render method:
  // h=>h(basically rendering App.vue to el:'#app')
})
