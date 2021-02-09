import { shallowMount } from '@vue/test-utils'
import InputMoney from '@components/Input/InputMoney.vue';

jest.mock('@assets/money.png', () => 'moneyPngIcon');

function shallowMountComponent(props, options) {
  return shallowMount(InputMoney, { props, ...options });
}

const mockCleanValue = () => 1000;
const mockOnInputValue = () => 2000;
const mockFormattedValue = () => '1,000.00';
const mockEventValue = () => ({ target: { value: mockFormattedValue() }});
const mockEventNumberKey = () => ({ keyCode: 51 });
const mockEventLetterKey = () => ({ keyCode: 67, preventDefault: () => {} });

describe('InputMoney', () => {
  it('should render dolar icon', () => {
    const wrapper = shallowMountComponent({ modelValue: mockCleanValue() });
    const icon = wrapper.find('img');
  
    expect(icon.attributes('src')).toEqual('moneyPngIcon');
  });

  it('should render base input with formatted value', () => {
    const wrapper = shallowMountComponent({ modelValue: mockCleanValue() });
    const baseInput = wrapper.find('base-input');

    expect(baseInput.html()).toBe('<base-input type="text" value="1,000.00"></base-input>');
  });

  it('should on blur', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockCleanValue() });

    wrapper.vm.onBlur(mockEventValue());

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.formattedValue).toBe(mockFormattedValue());
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([mockCleanValue()]);
  });

  it('should on input', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockCleanValue() });

    wrapper.vm.onInput(mockOnInputValue());

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.formattedValue).toBe(mockOnInputValue());
  });

  it('should allow numbers', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockCleanValue() });

    expect(wrapper.vm.onKeyPress(mockEventNumberKey())).toBeTruthy();
  });

  it('should not allow letters', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockCleanValue() });

    expect(wrapper.vm.onKeyPress(mockEventLetterKey())).toBeUndefined();
  });
});
