import { shallowMount } from '@vue/test-utils'
import BaseInput from '@components/Input/BaseInput.vue';

function shallowMountComponent(props, options) {
  return shallowMount(BaseInput, { props, ...options });
}

const mockTextInitialValue = () => 'mocked initial text value';
const mockTextFinalValue = () => 'mocked final text value';

describe('BaseInput', () => {
  it('should change text', async () => {
    const wrapper = shallowMountComponent({ value: mockTextInitialValue() });

    await wrapper.setProps({ value: mockTextFinalValue() });
  
    expect(wrapper.emitted('change')[0]).toEqual([mockTextFinalValue()]);
  });

  it('should input text', async () => {
    const wrapper = shallowMountComponent({ value: mockTextInitialValue() });
    const input = wrapper.find('input');

    await input.setValue(mockTextFinalValue());

    expect(wrapper.emitted('input')[0]).toEqual([mockTextFinalValue()]);
  });
});
