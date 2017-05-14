<template>
  <div>
      <input type="text" v-model="todoItem" v-on:keyup.enter="addTodo" />
      <ul v-for="(todo, index) in todos">
          <li>
              {{todo}}
              <button v-on:click="removeTodo(index)">x</button>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      todoItem: ''
    }
  },
  methods: {
    /**
     * return if submiting empty todo item or with blank space
     * add todo to todos and clear the input
    */
    addTodo () {
      if (this.todoItem.trim() === '') return
      this.todos.push(this.todoItem)
      this.todoItem = ''
    },
    /**
     * remove todo item from todos using the index
    */
    removeTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

