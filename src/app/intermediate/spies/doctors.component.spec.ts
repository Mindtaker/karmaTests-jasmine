import { DoctorsComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';
import { from, EMPTY, throwError } from 'rxjs';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  const service = new DoctorsService(null as any);

  beforeEach(() => {
    component = new DoctorsComponent(service);
  });

  it('init should load the doctors', () => {
    const doctors = ['doctor1', 'doctor2', 'doctor3'];
    spyOn(service, 'getDoctors').and.callFake(() => {
      return from([doctors]);
    });
    component.ngOnInit();
    expect(component.doctors.length).toBeGreaterThan(0);
  });

  it('should call the service to add a doctor', () => {
    const spy = spyOn(service, 'addDoctor').and.callFake(() => EMPTY);
    component.addDoctor();
    expect(spy).toHaveBeenCalled();
  });

  it('should add a new doctor to the doctors array', () => {
    const doctor = {
      id: 1,
      name: 'Pedro',
    };
    spyOn(service, 'addDoctor').and.returnValue(from([doctor]));
    component.addDoctor();
    expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
  });

  it('if add a new doctor fails, errorMessage should be set with the error from service', () => {
    const myError = 'Failed to add doctor';
    spyOn(service, 'addDoctor').and.returnValue(throwError(() => myError));
    component.addDoctor();
    expect(component.errorMessage).toBe(myError);
  });

  it('should call the service to delete a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'deleteDoctor').and.returnValue(EMPTY);
    component.deleteDoctor('1');
    expect(spy).toHaveBeenCalledWith('1');
  });

  it('should not call the service to delete a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'deleteDoctor').and.returnValue(EMPTY);
    component.deleteDoctor('1');
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
