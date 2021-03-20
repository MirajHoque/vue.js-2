import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
export default [
  {
    path:'/',component:showBlogs
    // '/' root path(home page)
  },
  {path:'/add', component:addBlog}
]