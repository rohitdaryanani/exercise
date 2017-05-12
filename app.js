const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const mycomponent = Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/my', component: mycomponent }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

