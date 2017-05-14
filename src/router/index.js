import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import School from '@/components/School'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/school',
      name: 'School',
      component: School
    }
  ]
})
