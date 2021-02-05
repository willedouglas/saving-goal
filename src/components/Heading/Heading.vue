<template>
  <span :style="styles">
    <slot />
  </span>  
</template>

<script>
import theme from '@components/theme';

export default {
  name: 'Heading',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'md',
    },
    font: {
      type: String,
      default: 'work',
    }
  },
  computed: {
    styles() {
      return {
        color: theme[`color_${this.type}`],
        fontSize: theme[`fontSize_${this.size}`],
        fontFamily: theme[`fontFamily_${this.font}`],
      };
    },
  },
};
</script>
