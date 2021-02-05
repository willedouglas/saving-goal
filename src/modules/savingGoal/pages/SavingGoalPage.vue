<template>
  <div class="saving-goal-page">
    <div class="saving-goal-page__subtitle">
      <heading
        type="primary"
        size="lg"
      >
        Let's plan your <b>saving goal.</b>
      </heading>
    </div>
    <saving-goal-form />
  </div>
</template>

<script>
import SavingGoalForm from '@modules/savingGoal/components/SavingGoalForm.vue';

export default {
  name: 'SavingGoalPage',
  components: {
    SavingGoalForm,
  },
};
</script>

<style lang="scss" scoped>
.saving-goal-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .saving-goal-page__subtitle {
    margin-top: 48px;
    margin-bottom: 24px;
  }
}
</style>
