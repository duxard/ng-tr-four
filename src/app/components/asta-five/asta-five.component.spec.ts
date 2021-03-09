import { FormBuilder } from "@angular/forms";
import { AstaFiveComponent } from "./asta-five.component";

describe('Form testing', () => {

  let component;

  beforeEach(() => {
    component = new AstaFiveComponent(new FormBuilder());
  });
  
  it('should create forms with 2 controls', () => {
    expect(component.form.contains('login')).toBe(true);
    expect(component.form.contains('email')).toBeTruthy();
  });
 
  it('should mark login as invalid if empty value', () => {
    const control = component.form.get('login')

    control.setValue('')

    expect(control.valid).toBeFalsy()
  });

});
