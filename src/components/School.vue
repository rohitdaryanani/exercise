<template>
  <div>
      <todo :todos="todos"></todo>
  </div>
</template>
<script>
import Todo from '@/components/Todo'

export default {
  name: 'school',
  components: {
    'todo': Todo
  },
  data () {
    return {
      todos: ['do homework', 'read books']
    }
  }
}
</script>

