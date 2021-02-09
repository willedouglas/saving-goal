import { shallowMount } from '@vue/test-utils'
import InputLabel from '@components/Input/InputLabel.vue';

function shallowMountComponent(props, options) {
  return shallowMount(InputLabel, { props, ...options });
}

describe('InputLabel', () => {
  it('should render label', () => {
    const wrapper = shallowMountComponent({ label: 'mocked label'});
    const heading = wrapper.find('heading');
  
    expect(heading.html()).toBe('<heading size=\"sm\">mocked label</heading>');
  });

  it('should render content', () => {
    const wrapper = shallowMountComponent({ label: 'mocked label '}, { slots: { default: 'mocked container' }});
    const labelContainer = wrapper.find('.label-container');
  
    expect(labelContainer.text()).toBe('mocked container');
  });

});
