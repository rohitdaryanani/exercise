const Home = { template: '<div>Todo App Started.</div>' }

const family = Vue.component('my-component', {
    data() {
        return {
            todoItem: '',
            todos: ['wash clothes', 'buy milk', 'sweep floor']
        }
    },
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

const school = Vue.component('my-component', {
    data() {
        return {
            todoItem: '',
            todos: ['do homeworks', 'read books']
        }
    },
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

const exercise = Vue.component('my-component', {
    data() {
        return {
            todoItem: '',
            todos: ['go to the gym', 'lift some weights', 'drink protein shake']
        }
    },
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
  { path: '/family', component: family },
  { path: '/school', component: school },
  { path: '/exercise', component: exercise }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

