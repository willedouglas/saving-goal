import { shallowMount } from '@vue/test-utils'
import Row from '@components/Row/Row.vue';

function shallowMountComponent(props, options) {
  return shallowMount(Row, { props, ...options });
}

describe('Row', () => {
  it('should render row with content', () => {
    const wrapper = shallowMountComponent({}, { slots: {
      default: 'row content',
    }});

    const row = wrapper.find('.row');
    
    expect(row.text()).toBe('row content');
  });
});
