<template>
  <div
    class="col"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    size: {
      type: Number,
      required: true,
      validator(value) {
        return value > 1 && value <= 12;
      },
    },
  },
  computed: {
    styles() {
      return {
        flex: this.size,
      };
    },
  },
};
</script>

<style scoped>
.col {
  padding: 0 15px;
}
</style>
