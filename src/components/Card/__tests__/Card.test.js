import { shallowMount } from '@vue/test-utils'
import Card from '@components/Card/Card.vue';

function shallowMountComponent(props, options) {
  return shallowMount(Card, { props, ...options });
}

describe('Card', () => {
  it('should render content inside card', () => {
    const wrapper = shallowMountComponent({}, { slots: {
      default: <div class="card-content-mocked"></div>,
    }});
    const divCardBody = wrapper.find('.card-body');
    
    expect(divCardBody.find('.card-content-mocked').exists()).toBeTruthy();
  });
});
