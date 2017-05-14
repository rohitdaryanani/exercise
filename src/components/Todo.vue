<template>
  <div>
    <input type="text" v-model="todoItem" v-on:keyup.enter="addTodo" />
      <ul v-for="(todo, index) in selectedProject">
        <li>{{todo}} <button v-on:click="removeTodo(index)">x</button></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'Todo',
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
      this.selectedProject.splice(index, 1)
    }
  }
}
</script>

