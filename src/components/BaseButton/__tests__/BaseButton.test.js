import { mount } from '@vue/test-utils'
import BaseButton from '@components/BaseButton/BaseButton.vue';

const mockOnClickFunction = jest.fn();

function mountComponent(props, options) {
  return mount(BaseButton, { props, ...options });
}

describe('BaseButton', () => {
  it('should render content text inside button', () => {
    const wrapper = mountComponent({
      onClick: mockOnClickFunction }, {
      slots: {
        default: 'Button Text',
      },
    });
  
    expect(wrapper.find('heading').text()).toContain('Button Text');
  });
  
  it('should click in button', async () => {
    const wrapper = mountComponent({
      onClick: mockOnClickFunction }, {
    });
  
    await wrapper.trigger('click');
  
    expect(mockOnClickFunction).toHaveBeenCalled();
  });
});
