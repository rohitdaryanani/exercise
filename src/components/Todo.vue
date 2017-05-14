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
  props: ['todos'],
  data () {
    return {
      todoItem: ''
    }
  },
  methods: {
    addTodo () {
      if (this.todoItem.trim() === '') return
      this.todos.push(this.todoItem)
      this.todoItem = ''
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

