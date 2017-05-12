const Home = { template: '<div>Todo App Started.</div>' }

const todo = Vue.component('my-component', {
    data() {
        return {
            todoItem: '',
        }
    },
    props: ['todos'],
    methods: {
        addTodo(){
            if(this.todoItem === '') return;
            this.todos.push(this.todoItem);
            this.todoItem = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    template:
        `<div>
            <input type="text" v-model="todoItem" v-on:keyup.enter="addTodo" />
            <ul v-for="(todo, index) in todos">
                <li>{{todo}} <button v-on:click="removeTodo(index)">x</button></li>
            </ul>
        </div>`
})


const routes = [
  { path: '/home', component: Home },
  { path: '/family', component: todo, props:{ todos: ['wash clothes','buy milk','sweep floor'] } },
  { path: '/school', component: todo, props:{ todos: ['do homework','read books'] } },
  { path: '/exercise', component: todo, props:{ todos: ['lift weights','drink protein shake'] } }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

