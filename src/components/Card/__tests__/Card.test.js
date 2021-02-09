import { shallowMount } from '@vue/test-utils'
import Card from '@components/Card/Card.vue';

function shallowMountComponent(props, options) {
  return shallowMount(Card, { props, ...options });
}

describe('Card', () => {
  it('should render content inside card', () => {
    const wrapper = shallowMountComponent({}, { slots: {
      default: 'content mocked slot default',
    }});
    const divCardBody = wrapper.find('.card-body');
    
    expect(divCardBody.text()).toBe('content mocked slot default');
  });
});
