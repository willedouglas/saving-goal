<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  margin: 0 -15px;
}

@media (max-width: 812px) {
  .row {
    flex-direction: column;
  }
}
</style>