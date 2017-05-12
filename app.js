const Home = { template: '<div>Todo App Started.</div>' }

const mycomponent = Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})


const routes = [
  { path: '/home', component: Home },
  { path: '/my', component: mycomponent }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

