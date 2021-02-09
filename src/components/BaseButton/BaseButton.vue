<template>
  <button
    :style="styles"
    @click="onClick"
  >
    <heading
      color="blank"
      :font-weight="900"
    >
      <slot />
    </heading>
  </button>
</template>

<script>
import theme from '@components/theme';

export default {
  name: 'BaseButton',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        background: theme.color_primary,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  height: 56px;
  min-width: 320px;
  text-align: center;
  border-radius: 32px;
  border-width: 0px;
  border-style: none;
  cursor: pointer;
}
</style>