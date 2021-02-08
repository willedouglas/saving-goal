<template>
  <card class="saving-goal-form">
    <slot />
    <div class="goal-values">
      <row>
        <column :size="7">
          <input-label label="Total amount">
            <input-money v-model="totalAmount" />
          </input-label>
        </column>
        <column :size="5">
          <input-label label="Reach goal by">
            <input-date
              v-model="reachGoalBy"
              :is-valid-date="isValidDate"
            />
          </input-label>
        </column>
      </row>
    </div>
    <div class="goal-details">
      <panel-total
        title="Monthly amount"
        :total="monthlyAmount"
      >
        <template #description>
          <heading size="xs">
            You're planning <b>{{ monthsDifference }} monthly deposits</b> to reach your <b>${{ totalAmountCurrency }}</b> goal by <b>{{ reachGoalByMonth }} {{ reachGoalByYear }}.</b>
          </heading>
        </template>
      </panel-total>
    </div>
    <div class="goal-submit">
      <base-button @click="handleOnSubmit">
        Confirm
      </base-button>
    </div>
  </card>
</template>

<script>
import { addYear, getCurrentDate, getMonth, getYear } from '@helpers/date';
import { formatValue } from '@helpers/format';
import { calculateMonthlyDeposit, isValidDate } from './savingGoalFormService';

export default {
  name: 'SavingGoalForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    amount: {
      type: Number,
      default: 10000,
    },
    reach: {
      type: String,
      default: addYear(getCurrentDate()),
    },
  },
  data() {
    return {
      totalAmount: this.amount,
      reachGoalBy: this.reach,
      monthsDifference: 0,
      monthlyAmount: 0,
    };
  },
  computed: {
    totalAmountCurrency() {
      return formatValue(this.totalAmount);
    },
    reachGoalByMonth() {
      return getMonth(this.reachGoalBy);
    },
    reachGoalByYear() {
      return getYear(this.reachGoalBy);
    },
  },
  watch: {
    reachGoalBy(value) {
      this.calculateMonthlyDeposit(this.totalAmount, value);
    },
    totalAmount(value) {
      this.calculateMonthlyDeposit(value, this.reachGoalBy);
    },
  },
  mounted() {
    this.calculateMonthlyDeposit(this.totalAmount, this.reachGoalBy);
  },
  methods: {
    handleOnSubmit() {
      const { totalAmount, reachGoalBy } = this;
      this.onSubmit({ totalAmount, reachGoalBy });
    },
    isValidDate(date) {
      return isValidDate(date);
    },
    calculateMonthlyDeposit() {
      const { monthsDifference, monthlyAmount } = calculateMonthlyDeposit(this.totalAmount, this.reachGoalBy);
      this.monthsDifference = monthsDifference;
      this.monthlyAmount = monthlyAmount;
    },
  },
};
</script>

<style lang="scss" scoped>
.saving-goal-form {
  .goal-values {
    margin-bottom: 24px;
  }

  .goal-details {
    margin-bottom: 32px;
  }

  .goal-submit {
    display: flex;
    justify-content: center;
  }
};

@media (max-width: 812px) {
  .col:nth-child(2) {
    margin-top: 16px;
  }
}
</style>
