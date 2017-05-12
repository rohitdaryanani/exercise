const todo = Vue.component('my-component', {
    props: ['todos'],
    data() {
        return {
            todoItem: '',
            // need this to avoid vues 2.3.3 mutating prop warning/error
            mutableTodos: this.todos
        }
    },
    methods: {
        addTodo(){
            // return if submiting empty todo or with blank space
            // add todo to todos and clear the input
            if(this.todoItem.trim() === '') return;
            this.mutableTodos.push(this.todoItem);
            this.todoItem = '';
        },
        removeTodo(index) {
            // both methods works filter works with data from props but throws a console warning
            // of avoid mutating props directly so after declaring local todos went with splice
            // which is much simpler.
            // this.mutableTodos = this.mutableTodos.filter(t => t !== this.mutableTodos[index])

            this.mutableTodos.splice(index,1);
        }
    },
    template:
        `<div>
            <input type="text" v-model="todoItem" v-on:keyup.enter="addTodo" />
            <ul v-for="(todo, index) in mutableTodos">
                <li>{{todo}} <button v-on:click="removeTodo(index)">x</button></li>
            </ul>
        </div>`
})

// data for home route
const Home = { template: '<div>Todo App Started.</div>' }

// declare routes and pass initial data per category
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

