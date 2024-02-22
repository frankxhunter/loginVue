import Vue from 'vue'
import VueRouter from 'vue-router'
import UserVue from '@/components/user/User.vue'
import HomeVue from '@/views/Home.vue'
import RegisterVue from '@/views/RegisterVue.vue'
import MainVue from '@/views/Main.vue'
import ChatVue from '@/views/Chat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name:'home',
    component: HomeVue,
  },
  {
    path: '/',
    name:'register',
    component: RegisterVue,
  },
  {
    path: `/user`,
    component: UserVue
  },
  {
    path: '/main',
    name: 'main',
    component: MainVue,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatVue,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
