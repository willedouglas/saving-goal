<template>
  <div class="panel">
    <div
      v-if="illustration"
      class="panel-icon"
    >
      <img :src="illustration">
    </div>
    <div class="panel-description">
      <heading
        font="rubik"
        size="xl"
      >
        {{ title }}
      </heading>
      <heading
        size="md"
        type="subtitle"
      >
        {{ description }}
      </heading>
    </div>
  </div>
</template>

<script>
import illustrations from '@components/Illustrations';

export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    illustration() {
      return illustrations[this.icon];
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: row;

  .panel-icon {
    margin-right: 15px;
  }

  .panel-description {
    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      margin-top: 5px;
    }
  }
}
</style>
