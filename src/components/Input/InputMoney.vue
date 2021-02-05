<template>
  <div class="input-money">
    <img :src="moneyIcon">
    <input type="text">
  </div>
</template>

<script>
import MoneyIcon from '@assets/money.png';

export default {
  name: 'InputMoney',
  computed: {
    moneyIcon() {
      return MoneyIcon;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-money {
  position: relative;

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

  img {
    position: absolute;
    top: 17px;
    margin-left: 17px;
  }
};
</style>