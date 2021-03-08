<template>
<div id="add-blog">
  <h2>Add a new blog</h2>
  <form action="" v-if="!submitted">
    <label for="">Blog Title:</label>
    <input type="text" v-model.lazy="blog.title" required/>
    <!--
      v-model="title"
      v-model: directive to create two way data bindig on input,textarea ; select(checkbox) elements

      <input type="text" v-model="title" required/>
      //input text store in title variable
      
    -->
    <label for="">Blog Content:</label>
    <textarea name="" id="" cols="30" rows="10" v-model.lazy="blog.content"></textarea>
    
    <div id="checkBoxes">
      <label for="">Ninjas</label>
      <input type="checkbox" value="Ninjas" v-model="blog.categories"/>
      <label for="">Wizards</label>
      <input type="checkbox" value="Wizards" v-model="blog.categories"/>
      <label for="">Mario</label>
      <input type="checkbox" value="Mario" v-model="blog.categories"/>
      <label for="">Cheese</label>
      <input type="checkbox" value="Chesse" v-model="blog.categories"/>
    </div>

    <label for="">Aurthor:</label>
    <select v-model="blog.author">
      <option v-for="element in authors" :key="element">{{ element }}</option>
    </select>

    <button @click.prevent="post">Add Post</button>
    <!--
      v-on:click.prevent
      //prevent: event modifer to prevent default behaviour
    -->
  </form>

  <div v-if="submitted">
    <h3>Thanks for adding your post</h3>
  </div>

  <div id="preview"></div>
    <h3>Preview Blog</h3>
    <p>Blog Title:{{ blog.title }}</p>
    <p>Blog Content:</p>
    <p>{{ blog.content }}</p>
    <p>Blog Categories</p>
    <ul>
      <li v-for="elements in blog.categories" :key="elements">{{ elements }}</li>
    </ul>
    <p>Author: {{ blog.author }}</p>

</div>
</template>

<script>
export default {
  data() {
    return {
      blog:{
        title: "",
      content: "",
      categories: [],
      author: ""
      },
      authors: ["The Net Ninja","The Angular Avenger","The Vue Indicator"],
      submitted: false //keep track the form is submitted or not
      
    

    }
  },
  methods:{
    post: function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userId:1

      }).then(function(data){
        console.log(data);
        this.submitted= true;
      });
      //this refer to current component
      //component.vue-resource.typeOfRequest('where we post in'(basically database),{content})
      //in this case we are using JSONPlaceholder
    }
    
  }

}
</script>

<style>

#add-blog *{
  box-sizing: border-box;

}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkBoxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkBoxes label{
  display: inline-block;
}

</style>>


