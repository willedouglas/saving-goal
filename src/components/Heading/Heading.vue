<template>
  <span :style="styles">
    <slot />
  </span>  
</template>

<script>
import theme from '@components/theme';
import isMobile from '@helpers/isMobile';

export default {
  name: 'Heading',
  props: {
    color: {
      type: String,
      default: 'default',
       validator(value) {
        return ['default', 'primary', 'secondary', 'subtitle', 'blank'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value);
      },
    },
    fontFamily: {
      type: String,
      default: 'work',
      validator(value) {
        return ['work', 'rubik'].includes(value);
      },
    },
    fontWeight: {
      type: Number,
      default: 400,
      validator(value) {
        return value >= 400 && value <= 900;
      },
    },
  },
  computed: {
    styles() {
      const platformTheme = isMobile() ? theme.mobile : theme.web;

      return {
        color: theme[`color_${this.color}`],
        fontSize: platformTheme[`fontSize_${this.size}`],
        fontFamily: theme[`fontFamily_${this.fontFamily}`],
        fontWeight: this.fontWeight,
      };
    },
  },
};
</script>
