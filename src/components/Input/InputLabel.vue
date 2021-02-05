<template>
  <div class="label">
    <heading size="sm">
      {{ label }}
    </heading>
    <div class="label-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  .label-container {
    margin-top: 4px;
  }
};
</style>