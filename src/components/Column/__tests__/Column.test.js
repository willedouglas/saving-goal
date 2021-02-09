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
      default: <div class="content"></div>,
    }});

    const column = wrapper.find('.col');
    const content = column.find('.content');
    
    expect(content.exists()).toBeTruthy();
  });
});
