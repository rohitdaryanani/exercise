<template>
  <div>
    <home :message="msg"></home>
  </div>
</template>
<script>
import Home from '@/components/Home'

export default {
  name: 'school',
  components: {
    'home': Home
  },
  data () {
    return {
      msg: 'school yo.'
    }
  }
}
</script>

