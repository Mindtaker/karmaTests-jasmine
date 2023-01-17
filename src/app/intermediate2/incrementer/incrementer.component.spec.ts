import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IncrementerComponent } from './incrementer.component';

describe('Incrementer Component', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementerComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
  });

  it('should show the label', () => {
    component.label = 'Loading process';
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('Loading process');
  });

  it('should show in the input the progress value', waitForAsync(() => {
    component.changeProgress(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      expect(input.value).toBe('55');
    });
  }));

  it('should increment/decrement the progress value with a click on the buttons', waitForAsync(() => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click', null);
    expect(component.progress).toBe(45);
    buttons[1].triggerEventHandler('click', null);
    expect(component.progress).toBe(50);
  }));

  it('should change the progress value when click on the button', () => {
    const button = fixture.debugElement.query(By.css('.btn-primary'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('45');
  });

});
