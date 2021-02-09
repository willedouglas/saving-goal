import { shallowMount } from '@vue/test-utils'
import Row from '@components/Row/Row.vue';

function shallowMountComponent(props, options) {
  return shallowMount(Row, { props, ...options });
}

describe('Row', () => {
  it('should render row with content', () => {
    const wrapper = shallowMountComponent({}, { slots: {
      default: <div class="col"><div class="content"></div></div>,
    }});

    const row = wrapper.find('.row');
    const column = row.find('.col');
    const content = column.find('.content')
    
    expect(content.exists()).toBeTruthy();
  });
});
