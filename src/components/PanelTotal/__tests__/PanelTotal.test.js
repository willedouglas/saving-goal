import { shallowMount } from '@vue/test-utils'
import PanelTotal from '@components/PanelTotal/PanelTotal.vue';

function shallowMountComponent(props, options) {
  return shallowMount(PanelTotal, { props, ...options });
}

describe('PanelTotal', () => {
  it('should render title', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', total: 3000 });
    const panelTotal = wrapper.find('.panel-total');
    const panelAmount = panelTotal.find('.panel-amount');
    const heading = panelAmount.find('heading');
    
    expect(heading.html()).toBe('<heading size="xl">mocked title</heading>');
  });

  it('should render total', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', total: 1000 });
    const panelTotal = wrapper.find('.panel-total');
    const panelAmount = panelTotal.find('.panel-amount');
    const headingTotal = panelAmount.find('heading-total');
    
    expect(headingTotal.html()).toBe('<heading-total total="1000"></heading-total>');
  });

  it('should not render panel description when slot is default', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', total: 1000 }, { slots: {
      default: <div class="panel-mocked"></div>,
    }});
    const panelTotal = wrapper.find('.panel-total');
    const panelDescription = panelTotal.find('.panel-description');
    const panelContent = panelDescription.find('.panel-mocked');
    
    expect(panelContent.exists()).toBeFalsy();
  });

  it('should render panel description when slot is description', () => {
    const wrapper = shallowMountComponent({ title: 'mocked title', total: 1000 }, { slots: {
      description: <div class="panel-mocked"></div>,
    }});
    const panelTotal = wrapper.find('.panel-total');
    const panelDescription = panelTotal.find('.panel-description');
    const panelContent = panelDescription.find('.panel-mocked');
    
    expect(panelContent.exists()).toBeTruthy();
  });
});
