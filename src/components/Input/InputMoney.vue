<template>
  <div class="input-money">
    <img :src="moneyIcon">
    <base-input
      type="text"
      :value="formattedValue"
      @keypress="onKeyPress"
      @blur="onBlur"
      @input="onInput"
    />
  </div>
</template>

<script>
import MoneyIcon from '@assets/money.png';
import { formatValue, unformatValue } from '@helpers/format';

export default {
  name: 'InputMoney',
  props: {
    modelValue: {
      type: [Number, String],
      default: 0,
    },
    absoluteOnly: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  data() {
    return {
      formattedValue: formatValue(this.modelValue, { absoluteOnly: this.absoluteOnly }),
    };
  },
  computed: {
    moneyIcon() {
      return MoneyIcon;
    },
  },
  methods: {
    update(value) {
      this.formattedValue = formatValue(value, { absoluteOnly: this.absoluteOnly });
    },
    onInput(value) {
      this.formattedValue = value;
    },
    onBlur(event) {
      const value = this.unformatValue(event.target.value);
      this.$emit('input', value);
      this.update(value);
    },
    unformatValue(value) {
      return unformatValue(value, { absoluteOnly: this.absoluteOnly });
    },
    onKeyPress(event) {
      const char = String.fromCharCode(event.keyCode);
      const isNumberRegex = /^[0-9]*$/;
      return !isNumberRegex.test(char) ? event.preventDefault() : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-money {
  position: relative;

  img {
    position: absolute;
    top: 17px;
    margin-left: 17px;
  }
};
</style>