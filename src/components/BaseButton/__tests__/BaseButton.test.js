import { shallowMount } from '@vue/test-utils'
import BaseButton from '@components/BaseButton/BaseButton.vue';

const mockOnClickFunction = jest.fn();

function shallowMountComponent(props, options) {
  return shallowMount(BaseButton, { props, ...options });
}

describe('BaseButton', () => {
  it('should render content text inside button', () => {
    const wrapper = shallowMountComponent({
      onClick: mockOnClickFunction }, {
      slots: {
        default: 'Button Text',
      },
    });
  
    expect(wrapper.find('heading').text()).toContain('Button Text');
  });
  
  it('should click in button', async () => {
    const wrapper = shallowMountComponent({
      onClick: mockOnClickFunction }, {
    });
  
    await wrapper.trigger('click');
  
    expect(mockOnClickFunction).toHaveBeenCalled();
  });
});
