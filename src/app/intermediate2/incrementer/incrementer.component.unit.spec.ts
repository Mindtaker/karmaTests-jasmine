import { IncrementerComponent } from "./incrementer.component";

describe('Incrementer Component Unit Tests', () => {

  let component: IncrementerComponent;

  beforeEach(() => (component = new IncrementerComponent()));

  it('progress should not be greater than 100', () => {
    component.progress = 100;
    component.changeProgress(5);
    expect(component.progress).toBe(100);
  });

});