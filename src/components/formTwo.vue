<template>
  <div>
       <form-helper>
      <div slot="form-header">
        <h3>Form Two- Log In</h3>
        <p>Enter your details to log in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="userName" required>
        <input type="text" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button @click="hadleSubmit">Log in</button>
      </div>
    </form-helper>
  </div>
    
</template>

<script>
import formHelper from './formHelper';
export default {
  components:{
    'form-helper': formHelper
  },

  data () {
    return {
    

    }
  },
  methods:{
    handleSubmit: function(){
      alert('thanks for looging in (form two)');
    }
    
  }

}
</script>

<style scoped>
</style>>


