import { shallowMount } from '@vue/test-utils'
import Heading from '@components/Heading/Heading.vue';

jest.mock('@helpers/isMobile')

import isMobile from '@helpers/isMobile';

function shallowMountComponent(props, options) {
  return shallowMount(Heading, { props, ...options });
}

describe('Heading', () => {
  it('should render text inside', () => {
    const wrapper = shallowMountComponent({}, { slots: {
      default: 'heading mocked text',
    }});
    
    expect(wrapper.text()).toBe('heading mocked text');
  });

  it('should render correct color', () => {
    const wrapper = shallowMountComponent({ color: 'primary' });
    
    expect(wrapper.attributes('style')).toBe(`color: rgb(27, 49, 168); font-size: 16px; font-family: 'Work Sans', sans-serif; font-weight: 400;`);
  });

  it('should render correct size when is web platform', () => {
    isMobile.mockReturnValue(false)
    const wrapper = shallowMountComponent({ size: 'xxl' });
    
    expect(wrapper.attributes('style')).toBe(`color: rgb(30, 42, 50); font-size: 32px; font-family: 'Work Sans', sans-serif; font-weight: 400;`);
  });

  it('should render correct size when is mobile platform', () => {
    isMobile.mockReturnValue(true);
    const wrapper = shallowMountComponent({ size: 'xxl' });
    
    expect(wrapper.attributes('style')).toBe(`color: rgb(30, 42, 50); font-size: 24px; font-family: 'Work Sans', sans-serif; font-weight: 400;`);
  });

  it('should render correct font family', () => {
    const wrapper = shallowMountComponent({ fontFamily: 'rubik' });
    
    expect(wrapper.attributes('style')).toBe(`color: rgb(30, 42, 50); font-size: 16px; font-family: 'Rubik', sans-serif; font-weight: 400;`);
  });

  it('should render correct font weight', () => {
    const wrapper = shallowMountComponent({ fontWeight: 600 });
    
    expect(wrapper.attributes('style')).toBe(`color: rgb(30, 42, 50); font-size: 16px; font-family: 'Work Sans', sans-serif; font-weight: 600;`);
  });
});
