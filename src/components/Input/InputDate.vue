<template>
  <div class="input-date">
    <img
      class="left-chevron"
      :src="leftChevron"
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
      :src="rightChevron"
    >
  </div>
</template>

<script>
import LeftChevron from '@assets/left-chevron.svg';
import RightChevron from '@assets/right-chevron.svg';

export default {
  name: 'InputDate',
  props: {
    date: {
      type: String,
      default: ''
    },
  },
  computed: {
    month() {
      return 'October';
    },
    year() {
      return '2021';
    },
    leftChevron() {
      return LeftChevron;
    },
    rightChevron() {
      return RightChevron;
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
