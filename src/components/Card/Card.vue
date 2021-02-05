<template>
  <div
    class="card"
    :style="styles"
  >
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
import theme from '@components/theme';

export default {
  name: 'Card',
  computed: {
    styles() {
      return {
        background: theme.color_blank,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 560px;
  height: 100%;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;

  .card-body {
    padding: 35px 40px 40px 40px;
  }
};

@media (max-width: 812px) {
  .card {
    width: 100%;
  }
};
</style>

