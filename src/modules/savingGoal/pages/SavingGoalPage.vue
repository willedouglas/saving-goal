<template>
  <div class="saving-goal-page">
    <div class="saving-goal-page__subtitle">
      <heading
        size="lg"
        color="primary"
      >
        Let's plan your <b>saving goal.</b>
      </heading>
    </div>
    <saving-goal-form
      :amount="amount"
      :reach="reach"
      :on-submit="onSubmit"
    >
      <panel
        title="Buy a house"
        icon="house"
        description="Saving goal"
      />
    </saving-goal-form>
  </div>
</template>

<script>
import SavingGoalForm from '@modules/savingGoal/components/SavingGoalForm.vue';
import { addYear, getCurrentDate } from '@helpers/date';

export default {
  name: 'SavingGoalPage',
  components: {
    SavingGoalForm,
  },
  data() {
    return {
      amount: 10000,
      reach: addYear(getCurrentDate()),
    };
  },
  methods: {
    onSubmit({ totalAmount, reachGoalBy }) {
      console.log('submitted!', { totalAmount, reachGoalBy });
    },
  },
};
</script>

<style lang="scss" scoped>
.saving-goal-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .saving-goal-page__subtitle {
    margin-top: 48px;
    margin-bottom: 24px;
  }
}
</style>
