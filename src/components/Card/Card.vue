<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
.card {
  width: 550px;
  height: 511px;
  background: #FFFFFF;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 35px 40px 40px 40px;
}
</style>

