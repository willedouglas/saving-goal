import { shallowMount } from '@vue/test-utils'
import InputDate from '@components/Input/InputDate.vue';

jest.mock('@assets/left-chevron.svg', () => 'leftChevronSvgMock');
jest.mock('@assets/right-chevron.svg', () => 'rightChevronSvgMock');

function shallowMountComponent(props, options) {
  return shallowMount(InputDate, { props, ...options });
}

const mockDate = () => '2025-08-08';
const mockIsValidFalse = () => false;
const mockPreviousMonthPeriod = () => '2025-07-08';
const mockNextMonthPeriod = () => '2025-09-08';

describe('InputDate', () => {
  it('should render icons', () => {
    const wrapper = shallowMountComponent();
    const icons = wrapper.findAll('img');
  
    expect(icons[0].attributes('src')).toBe('leftChevronSvgMock');
    expect(icons[1].attributes('src')).toBe('rightChevronSvgMock');
  });

  it('should render headings with period', () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });
    const headings = wrapper.findAll('heading');
  
    expect(headings[0].text()).toBe('August');
    expect(headings[1].text()).toBe('2025');
  });

  it('should advance a month when left icon triggered and is valid', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });
    const leftIcon = wrapper.find('.left-chevron');

    await leftIcon.trigger('click');
  
    expect(wrapper.vm.date).toBe(mockPreviousMonthPeriod());
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([mockPreviousMonthPeriod()]);
  });

  it('should subtract a month when right icon triggered and is valid', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });
    const rightIcon = wrapper.find('.right-chevron');

    await rightIcon.trigger('click');
  
    expect(wrapper.vm.date).toBe(mockNextMonthPeriod());
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([mockNextMonthPeriod()]);
  });

  it('should not advance a month when left icon triggered and is invalid', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate(), isValidDate: mockIsValidFalse });
    const leftIcon = wrapper.find('.left-chevron');

    await leftIcon.trigger('click');
  
    expect(wrapper.vm.date).toBe(mockDate());
  });

  it('should not subtract a month when right icon triggered and is invalid', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate(), isValidDate: mockIsValidFalse });
    const rightIcon = wrapper.find('.right-chevron');

    await rightIcon.trigger('click');
  
    expect(wrapper.vm.date).toBe(mockDate());
  });

  it('should advance a month when left key press and valid', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });

    wrapper.vm.onKeyPress({ code: 'ArrowLeft' });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.date).toBe(mockPreviousMonthPeriod());
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([mockPreviousMonthPeriod()])
  });

  it('should subtract a month when right key press and valid', async () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });

    wrapper.vm.onKeyPress({ code: 'ArrowRight' });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.date).toBe(mockNextMonthPeriod());
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([mockNextMonthPeriod()]);
  });

  it('should do nothing when up key press and valid', () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });

    wrapper.vm.onKeyPress({ code: 'ArrowUp' });

    expect(wrapper.vm.date).toBe(mockDate());
  });

  test('should unmount to remove listeners', () => {
    const wrapper = shallowMountComponent({ modelValue: mockDate() });
  
    wrapper.unmount();
  });
});
