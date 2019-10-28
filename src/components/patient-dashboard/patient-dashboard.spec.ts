import { TestWindow } from '@stencil/core/testing';
import { PatientDashboard } from './patient-dashboard';

describe('patient-dashboard', () => {
  it('should build', () => {
    expect(new PatientDashboard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPatientDashboardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PatientDashboard],
        html: '<patient-dashboard>' 
          + '</patient-dashboard>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
