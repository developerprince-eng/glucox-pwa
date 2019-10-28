import { TestWindow } from '@stencil/core/testing';
import { DocDashboard } from './doc-dashboard';

describe('doc-dashboard', () => {
  it('should build', () => {
    expect(new DocDashboard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDocDashboardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DocDashboard],
        html: '<doc-dashboard>' 
          + '</doc-dashboard>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
