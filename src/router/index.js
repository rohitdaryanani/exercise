import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Family from '@/components/Family'
import School from '@/components/School'
import Exercise from '@/components/Exercise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/family',
      name: 'Family',
      component: Family
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Exercise
    }
  ]
})
