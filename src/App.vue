<template>
  <div>
    <form-helper>
      <!--
         <h2 slot="title">I am the slot title</h2>
         //<h2 slot="name of the slot">I am the slot title</h2>
         <p slot="text">I am the paragraph for the text</p>
      -->

    <div slot="form-header">
      <h3>this is the title about the form</h3>
      <p>information about the form</p>
    </div>

    <div slot="form-fields">
      <input type="text" name="name" id="" placeholder="name">
      <input type="password" name="password" id="" placeholder="password">
    </div>

    <div slot="form-controls">
      <button @click="handleSubmit">submit</button>
    </div>
    

    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue';
export default {
  components:{
    'form-helper': formHelper,
  },
  data () {
    return {
    

    }
  },
  methods:{
    
  }

}
</script>

<style scoped>

</style>>


