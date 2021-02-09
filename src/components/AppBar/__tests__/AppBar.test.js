import { shallowMount } from '@vue/test-utils'
import AppBar from '@components/AppBar/Appbar.vue';

function shallowMountComponent(props, options) {
  return shallowMount(AppBar, { props, ...options });
}

describe('AppBar', () => {
  it('should render image', () => {
    const wrapper = shallowMountComponent();
    const divHeader = wrapper.find('.header');
  
    expect(divHeader.find('img').exists()).toBeTruthy();
  });
});
