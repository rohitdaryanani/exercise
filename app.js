// todo component
const Todo = Vue.component('todo', {
  props: {
    project: {
      type: String
    }
  },
  data () {
    return {
      todoItem: '',
      categories: {
        family: ['wash clothes', 'buy milk', 'sweep floor'],
        school: ['do homework', 'read books'],
        exercise: ['lift weights', 'drink protein shake']
      }
    }
  },
  computed: {
    selectedProject () {
      return this.categories[this.project]
    }
  },
  methods: {
    addTodo () {
      /**
        * return if submiting empty todo item or with blank space
        * check if selected project exist if then just return
        * add todo to todos and clear the input
      */
      if (this.todoItem.trim() === '' || !this.selectedProject) return

      this.selectedProject.push(this.todoItem)
      this.todoItem = ''
    },
    removeTodo (index) {
      /**
        * remove todo item from todos using the index
      */
      this.selectedProject = this.selectedProject.filter(t => t !== this.selectedProject[index])
    }
  },
  template:
    `<div>
        <input type="text" v-model="todoItem" v-on:keyup.enter="addTodo" />
        <ul v-for="(todo, index) in selectedProject">
            <li>{{todo}} <button v-on:click="removeTodo(index)">x</button></li>
        </ul>
    </div>`
})


// data for home route
const Home = { 
    template: '<div>{{message}}</div>',
    data() { 
        return {
            message : 'Todo App Started.'
        }
    }
}

// declare routes and pass initial data per category
const routes = [
  { path: '/', component: Home },
  { path: '/:project', component: Todo, props: true }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

/* Questions
1. List out the Vue components required, and their specification.
    Todo
        - Props: project[String]
        - Events emitted: addTodo, removeTodo
        - State: todoItem[String], categories[Object], 
        - computed: selectedProject[Array]
    Home
        - State: message[String]
    

2. Suggest the format of the JSON object that specifies the application state in each design

    intial state
    {
        todoItem: '',
        categories: {
            family: ['wash clothes','buy milk','sweep floor'],
            school: ['do homework','read books'],
            exercise: ['lift weights','drink protein shake']
        },
        selectedProject[: []
    }

    routechange/project selected state //selected family
    {
        todoItem: '',
        categories: {
            family: ['wash clothes','buy milk','sweep floor'],
            school: ['do homework','read books'],
            exercise: ['lift weights','drink protein shake']
        },
        selectedProject: ['wash clothes','buy milk','sweep floor']
    }
*/