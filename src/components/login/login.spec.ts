import { TestWindow } from '@stencil/core/testing';
import { Login } from './login';

describe('login', () => {
  it('should build', () => {
    expect(new Login()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLoginElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Login],
        html: '<login>' 
          + '</login>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
