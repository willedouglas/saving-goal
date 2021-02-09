import { shallowMount } from '@vue/test-utils'
import SavingGoalPage from '../SavingGoalPage.vue';
import SavingGoalForm from '../../components/SavingGoalForm.vue';

const mockTotalAmount = () => 1000;
const mockReachGoalBy = () => '2014-01-01';

function shallowMountComponent(props, options) {
  return shallowMount(SavingGoalPage, { props, ...options });
}

describe('SavingGoalPage', () => {
  it('should render heading correctly', () => {
    const wrapper = shallowMountComponent();
    const heading = wrapper.find('heading');
  
    expect(heading.html()).toBe(`<heading size=\"lg\" color=\"primary\"> Let's plan your <b>saving goal.</b></heading>`);
  });

  it('should submit', () => {
    const wrapper = shallowMountComponent();

    wrapper.vm.onSubmit({
      totalAmount: mockTotalAmount(),
      reachGoalBy: mockReachGoalBy(),
    });
  });

  it('should trigger submit when form fire', () => {
    SavingGoalPage.methods.onSubmit = jest.fn();
    Date.now = jest.fn(() => new Date('2019-05-01 23:59:59'));

    const wrapper = shallowMountComponent();
    const form = wrapper.findComponent(SavingGoalForm);

    form.vm.onSubmit({
      totalAmount: mockTotalAmount(),
      reachGoalBy: mockReachGoalBy(),
    });

    expect(form.vm.amount).toBe(10000);
    expect(form.vm.reach).toBe('2020-05-01');
  
    expect(SavingGoalPage.methods.onSubmit).toHaveBeenCalledWith({
      totalAmount: mockTotalAmount(),
      reachGoalBy: mockReachGoalBy(),
    });
  });
});
