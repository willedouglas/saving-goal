<template>
  <card class="saving-goal-form">
    <panel
      title="Buy a house"
      icon="house"
      description="Saving goal"
    />
    <div class="goal-values">
      <row>
        <column :size="7">
          <input-label label="Total amount">
            <input-money />
          </input-label>
        </column>
        <column :size="5">
          <input-label label="Reach goal by">
            <input-date />
          </input-label>
        </column>
      </row>
    </div>
    <div class="goal-details">
      <panel-total
        title="Monthly amount"
        :total="1123"
      >
        <template #description>
          <heading size="xs">
            You're planning <b>48 monthly deposits</b> to reach your <b>$25,000</b> goal by <b>October 2020.</b>
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
export default {
  name: 'SavingGoalForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleOnSubmit() {
      this.onSubmit();
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
