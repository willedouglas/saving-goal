import { shallowMount } from '@vue/test-utils'
import HeadingTotal from '@components/HeadingTotal/HeadingTotal.vue';

function shallowMountComponent(props, options) {
  return shallowMount(HeadingTotal, { props, ...options });
}

describe('HeadingTotal', () => {
  it('should render heading with props', () => {
    const wrapper = shallowMountComponent({ total: 100 });
    
    expect(wrapper.html()).toBe('<heading size="xxl" color="secondary" font-family="rubik" font-weight="900"> $100.00</heading>');
  });

  it('should render number formatted', () => {
    const wrapper = shallowMountComponent({ total: 4000 });
    
    expect(wrapper.text()).toBe('$4,000.00');
  });
});
