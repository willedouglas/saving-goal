import { shallowMount } from '@vue/test-utils'
import SavingGoalForm from '../../components/SavingGoalForm.vue';

function shallowMountComponent(props, options) {
  return shallowMount(SavingGoalForm, { props, ...options });
}

const mockOnSubmitFunction = jest.fn();

const mockFormattedInitialValue = () => '10,000.00';
const mockAmount = () => 25000;

const mockExpectedMonthlyAmount = () => 462.962962962963;
const mockExpectedMonthsDifference = () => 54;

const mockReachGoalBy = () => '2025-08-08';
const mockFormattedReachMonth = () => 'February';
const mockReachYear = () => '2022';

describe('SavingGoalForm', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => new Date('2021-02-01 23:59:59'));
  });

  it('should render inputs with labels correctly', () => {
    const wrapper = shallowMountComponent({ onSubmit: mockOnSubmitFunction });
    const inputLabels = wrapper.findAll('input-label');
    const inputMoney = inputLabels[0]
    const inputDate = inputLabels[1];
  
    expect(inputMoney.html()).toBe('<input-label label="Total amount"><input-money modelvalue="10000"></input-money></input-label>')
    expect(inputDate.html()).toBe('<input-label label="Reach goal by"><input-date modelvalue="2022-02-09" is-valid-date="function () { [native code] }"></input-date></input-label>')
  });

  it('should render panel total correctly', () => {
    const wrapper = shallowMountComponent({ onSubmit: mockOnSubmitFunction });
    const panelTotal = wrapper.find('panel-total');
  
    expect(panelTotal.html()).toBe('<panel-total title="Monthly amount" total="0"></panel-total>')
  });

  it('should compute amount and date', () => {
    const wrapper = shallowMountComponent({ onSubmit: mockOnSubmitFunction });

    expect(wrapper.vm.totalAmountCurrency).toEqual(mockFormattedInitialValue());
    expect(wrapper.vm.reachGoalByMonth).toEqual(mockFormattedReachMonth());
    expect(wrapper.vm.reachGoalByYear).toEqual(mockReachYear());
  });

  it('should calculate a new amount and date when change field data', async () => {
    const wrapper = shallowMountComponent({ onSubmit: mockOnSubmitFunction });

    await wrapper.setData({
      totalAmount: mockAmount(),
      reachGoalBy: mockReachGoalBy(),
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.monthsDifference).toEqual(mockExpectedMonthsDifference());
    expect(wrapper.vm.monthlyAmount).toEqual(mockExpectedMonthlyAmount());
  });

  it('should submit current values', async () => {
    const wrapper = shallowMountComponent({ onSubmit: mockOnSubmitFunction });
    const baseButton = wrapper.find('base-button');

    await wrapper.setData({
      totalAmount: mockAmount(),
      reachGoalBy: mockReachGoalBy(),
    });

    await baseButton.trigger('click');

    expect(mockOnSubmitFunction).toHaveBeenCalledWith({
      totalAmount: mockAmount(),
      reachGoalBy: mockReachGoalBy(),
    });
  });

  it('should valid if is after current date', async () => {
    const wrapper = shallowMountComponent({ onSubmit: mockOnSubmitFunction });
    
    expect(wrapper.vm.isValidDate(mockReachGoalBy())).toBeTruthy();
  });
});
