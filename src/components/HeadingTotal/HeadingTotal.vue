<template>
  <heading
    size="xxl"
    color="secondary"
    font-family="rubik"
    :font-weight="900"
  >
    ${{ total }}
  </heading>
</template>

<script>
export default {
  name: 'HeadingTotal',
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>
