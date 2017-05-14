<template>
  <p>{{message}}</p>
</template>
<script>
export default {
  name: 'home',
  props: ['message'],
  data () {
    return {
      msg: 'Todo App Started.'
    }
  }
}
</script>

