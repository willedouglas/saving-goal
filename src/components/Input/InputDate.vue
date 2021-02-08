<template>
  <div class="input-date">
    <img
      class="left-chevron"
      :src="leftChevronIcon"
      @click="nextPeriod"
    >
    <div class="date-display">
      <heading :font-weight="900">
        {{ month }}
      </heading>
      <heading color="subtitle">
        {{ year }}
      </heading>
    </div>
    <img
      class="right-chevron"
      :src="rightChevronIcon"
      @click="backPeriod"
    >
  </div>
</template>

<script>
import LeftChevron from '@assets/left-chevron.svg';
import RightChevron from '@assets/right-chevron.svg';

import {
  getMonth,
  getYear,
  addMonth,
  subtractMonth,
  getCurrentDate,
} from '@helpers/date';

export default {
  name: 'InputDate',
  props: {
    modelValue: {
      type: String,
      default: getCurrentDate(),
    },
    isValidDate: {
      type: Function,
      default: () => {},
    },
  },
emits: ['update:modelValue'],
  data() {
    return {
      date: this.modelValue,
    };
  },
  computed: {
    month() {
      return getMonth(this.date);
    },
    year() {
      return getYear(this.date);
    },
    leftChevronIcon() {
      return LeftChevron;
    },
    rightChevronIcon() {
      return RightChevron;
    },
  },
  watch: {
    date(value) {
      this.onChange(value);
    },
  },
  created() {
    window.addEventListener('keydown', this.onKeyPress);
  },
  unmounted() {
    window.removeEventListener('keydown', this.onKeyPress);
  },
  methods: {
    backPeriod() {
      const futureMonthDate = addMonth(this.date);

      if (this.isValidDate(futureMonthDate))  {
        this.date = futureMonthDate;
      }
    },
    nextPeriod() {
      const pastMonthDate = subtractMonth(this.date);

      if (this.isValidDate(pastMonthDate))  {
        this.date = pastMonthDate;
      }
    },
    onKeyPress(e) {
      const { code } = e;

      const keyboardActions = {
        ArrowLeft: this.nextPeriod,
        ArrowRight: this.backPeriod,
      }

      return keyboardActions[code] && keyboardActions[code]();
    },
    onChange() {
      this.$emit('update:modelValue', this.date)
    },
  },
};
</script>

<style lang="scss" scoped>
.input-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background: #FFFFFF;
  border: 1px solid #E9EEF2;
  border-radius: 4px;
  width: 100%;

  .date-display {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    span:nth-child(2) {
      margin-top: 5px;
    }
  }

  .left-chevron {
    margin-left: 20px;
  }

  .right-chevron {
    margin-right: 20px;
  }

  img {
    width: 16px;
    height: 16px;

    &:hover {
      cursor: pointer;
    }
  }
};
</style>
