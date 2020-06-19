import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import('../views/home/Home.vue')
const Category =()=> import('../views/category/Category.vue')
const Other =()=> import('../views/other/Other.vue')
const My =()=> import('../views/my/My.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/other',
    name: 'Other',
    component: Other
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
