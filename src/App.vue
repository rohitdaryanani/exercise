<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/family">family</router-link>
    <router-link to="/school">school</router-link>
    <router-link to="/exercise">exercise</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
