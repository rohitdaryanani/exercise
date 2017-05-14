<template>
  <div>
      <todo :todos="todos"></todo>
  </div>
</template>
<script>
import Todo from '@/components/Todo'

export default {
  name: 'exercise',
  components: {
    'todo': Todo
  },
  data () {
    return {
      todos: ['lift weights', 'drink protein shake']
    }
  }
}
</script>

