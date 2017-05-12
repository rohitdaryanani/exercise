const Home = { template: '<div>Todo App Started.</div>' }

const mycomponent = Vue.component('my-component', {
    data() {
        return {
            todos: ['wash clothes', 'buy milk', 'sweep floor']
        }
    },
    template: '<div><ul v-for="todo in todos"><li>{{todo}}</li></ul></div>'
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

