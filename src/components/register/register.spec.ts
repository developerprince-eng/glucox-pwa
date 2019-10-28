import { TestWindow } from '@stencil/core/testing';
import { Register } from './register';

describe('register', () => {
  it('should build', () => {
    expect(new Register()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRegisterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Register],
        html: '<register>' 
          + '</register>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
