<template>
  <input
    class="base-input"
    :value="value"
    :required="required"
    :readonly="readonly"
    :disabled="disabled"
    :type="type"
    v-bind="$attrs"
    @input="onInput"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    onChange: {
      type: Function,
      default: () => {},
    },
    value: {
      type: [Number, String],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return !type || ['text', 'number'].includes(type);
      },
    },
  },
  emits: ['change', 'input'],
  watch: {
    value(value) {
      this.onInputChange(value);
    },
  },
  methods: {
    onInputChange(value) {
      this.$emit('change', value);
      this.onChange(value);
    },
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  background: #FFFFFF;
  border: 1px solid #E9EEF2;
  border-radius: 4px;
  height: 56px;
  width: 100%;
  font-family: Rubik;
  font-size: 24px;
  color: #4D6475;
  padding: 0;
  text-indent: 44px;
};
</style>
