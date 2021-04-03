import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';
export default [
  {
    path:'/',component:showBlogs
    // '/' root path(home page)
  },
  {path:'/add', component:addBlog},
  {path:'/blog/:id', component:singleBlog}
]