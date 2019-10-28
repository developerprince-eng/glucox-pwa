import { TestWindow } from '@stencil/core/testing';
import { AppLregister } from './app-lregister';

describe('app-lregister', () => {
  it('should build', () => {
    expect(new AppLregister()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppLregisterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppLregister],
        html: '<app-lregister>' 
          + '</app-lregister>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
