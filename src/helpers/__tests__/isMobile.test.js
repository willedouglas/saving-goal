import isMobile from '@helpers/isMobile';

let userAgent;

describe('Format', () => {
  beforeEach(() => {
    userAgent = jest.spyOn(window.navigator, 'userAgent', 'get')
  })

  it('should get is mobile when android', () => {
    userAgent.mockReturnValue('Android');
    expect(isMobile()).toBeTruthy();
  });

  it('should get is mobile when iphone', () => {
    userAgent.mockReturnValue('iPhone');
    expect(isMobile()).toBeTruthy();
  });

  it('should not is mobile when mozilla', () => {
    userAgent.mockReturnValue('Mozilla');
    expect(isMobile()).toBeFalsy();
  });
});