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
    <saving-goal-form :on-submit="onSubmit" />
  </div>
</template>

<script>
import SavingGoalForm from '@modules/savingGoal/components/SavingGoalForm.vue';

export default {
  name: 'SavingGoalPage',
  components: {
    SavingGoalForm,
  },
  methods: {
    onSubmit() {
      console.log('submitted!');
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
