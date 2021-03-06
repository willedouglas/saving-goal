import { shallowMount } from '@vue/test-utils'
import Column from '@components/Column/Column.vue';

function shallowMountComponent(props, options) {
  return shallowMount(Column, { props, ...options });
}

describe('Column', () => {
  it('should render column with size', () => {
    const wrapper = shallowMountComponent({ size: 4 });
    const column = wrapper.find('.col');
    
    expect(column.attributes('style')).toBe('flex: 4;');
  });

  it('should render column content', () => {
    const wrapper = shallowMountComponent({ size: 4 }, { slots: {
      default: 'mocked column slot content',
    }});

    const column = wrapper.find('.col');
    
    expect(column.text()).toBe('mocked column slot content');
  });
});
