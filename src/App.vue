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

<style scope>
  a:not(:first-of-type) {
    border-left: 1px solid #000000;
    padding: 0 0 0 5px;
  }
</style>
