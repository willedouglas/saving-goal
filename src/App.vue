<template>
  <app-bar />
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

body {
  margin: 0;
  background: #F4F8FA;
  font-family: 'Work Sans', sans-serif;
};
</style>
