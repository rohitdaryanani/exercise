// routes component
const categoryLinks = Vue.component('category-links', {
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
    template:`<span>
            <router-link class="todo-link" v-for="route in routes" v-bind:to="route">{{route}}</router-link>
        </span>`
})

// todo component
const todo = Vue.component('todo', {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            todoItem: '',
        }
    },
    methods: {
        addTodo(){
            // return if submiting empty todo or with blank space
            // add todo to todos and clear the input
            if(this.todoItem.trim() === '') return;
            this.todos.push(this.todoItem);
            this.todoItem = '';
        },
        removeTodo(index) {
            // returns a new todo array
            this.todos = this.todos.filter(t => t !== this.todos[index])

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


// data for home route
const Home = { template: '<div>Todo App Started.</div>' }

// declare routes and pass initial data per category
const routes = [
  { path: '/', component: Home },
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

/* Questions
1. List out the Vue components required, and their specification.
    todo
        - Props: todos[array]
        - Events emitted: addTodo, removeTodo
        - State: todoItem
    
    category-links
        - props: routes[array]

    app
        - State: todos

2. Suggest the format of the JSON object that specifies the application state in each design

    intial state
    {
        todoItem: '',
        todos :[]
    }

    routechange/project selected state //selected family
    {
        todoItem: '',
        todos: [wash clothes','buy milk','sweep floor]
    }

    adding todo
    {
        todoItem: 'do chores',
        todos: [wash clothes','buy milk','sweep floor]
    }


*/