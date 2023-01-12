import { RegisterForm } from './form';
import { FormBuilder } from '@angular/forms';

describe('Forms', () => {
  let component: RegisterForm;

  beforeEach(() => {
    component = new RegisterForm(new FormBuilder());
  });

  it('should create a form with two fields, email and password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should make the email field required', () => {
    let control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the email a valid field', () => {
    let control = component.form.get('email');
    control?.setValue('nicolas@mail.com');
    expect(control?.valid).toBeTruthy();
  });


});
