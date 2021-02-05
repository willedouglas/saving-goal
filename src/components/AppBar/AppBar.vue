<template>
  <div class="header">
    <img :src="logo">
  </div>
</template>

<script>
import Logo from '@assets/logo.png';

export default {
  name: 'AppBar',
  computed: {
    logo() {
      return Logo;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  background: #FFFFFF;

  img {
    margin-left: 56px;
    margin-top: 24px;
  }
};

@media (max-width: 812px) {
  .header {
    height: 56px;

    img {
      margin-left: 16px;
      margin-top: 16px;
    }
  }
};
</style>
