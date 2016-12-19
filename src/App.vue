<template>
  <div id="app">
    <router-link :to="{ name: 'root'}">
      <img src="./assets/logo.png">
    </router-link>
    <div>
      <router-link :to="{ name: 'hello'}">Hello</router-link>
      <router-link :to="{ name: 'bye'}">Bye</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #41B883;

  &.router-link-active {
    color: #35495E;
  }
}

</style>
