import { shallowMount } from '@vue/test-utils'
import Panel from '@components/Panel/Panel.vue';

jest.mock('@components/Illustrations', () => ({ house: 'mocked svg' }));

function shallowMountComponent(props, options) {
  return shallowMount(Panel, { props, ...options });
}

describe('Panel', () => {
  it('should render panel icon when passed valid icon', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', description: 'mocked description', icon: 'house' });
    const panelIcon = wrapper.find('.panel-icon');
    const image = panelIcon.find('img');
    
    expect(image.exists()).toBeTruthy();
  });

  it('should not render panel icon when not passed icon', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', description: 'mocked description' });
    const panelIcon = wrapper.find('.panel-icon');
    
    expect(panelIcon.exists()).toBeFalsy();
  });

  it('should render title', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', description: 'mocked description' });
    const panelDescription = wrapper.findAll('heading');
    const title = panelDescription[0];
    
    expect(title.html()).toBe('<heading size="xl" font-family="rubik">mocked title</heading>');
  });

  it('should render description', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', description: 'mocked description' });
    const panelDescription = wrapper.findAll('heading');
    const description = panelDescription[1];
    
    expect(description.html()).toBe('<heading size="md" color="subtitle">mocked description</heading>');
  });
});
