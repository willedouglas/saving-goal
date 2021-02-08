<template>
  <heading
    size="xxl"
    color="secondary"
    font-family="rubik"
    :font-weight="900"
  >
    ${{ formattedValue }}
  </heading>
</template>

<script>
import { formatValue } from '@helpers/format';

export default {
  name: 'HeadingTotal',
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedValue() {
      return formatValue(this.total);
    },
  },
};
</script>
