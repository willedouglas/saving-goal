<template>
  <div class="panel-total">
    <div class="panel-amount">
      <heading size="xl">
        {{ title }}
      </heading>
      <heading-total :total="total" />
    </div>
    <div class="panel-description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelTotal',
  props: {
    title: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.panel-total {
  display: flex;
  flex-direction: column;
  border: 1px solid #E9EEF2;
  border-radius: 8px;

  .panel-amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px 21px 32px;
  }

  .panel-description {
    background: #F4F8FA;
    border-radius: 0px 0px 8px 8px;
    padding: 24px 32px 21px 32px;
  }
};
</style>
