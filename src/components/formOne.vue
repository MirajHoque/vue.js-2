<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One-Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label for="">Your Mesage:</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="hadleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
    
</template>

<script>
import formHelper from './formHelper.vue'
export default {
  components: { formHelper },

  data () {
    return {
    

    }
  },
  methods:{
    
  }

}
</script>

<style scoped>

</style>


