<template>
  <div>
      <todo :todos="todos"></todo>
  </div>
</template>
<script>
import Todo from '@/components/Todo'

export default {
  name: 'family',
  components: {
    'todo': Todo
  },
  data () {
    return {
      todos: ['wash clothes', 'buy milk', 'sweep floor']
    }
  }
}
</script>

