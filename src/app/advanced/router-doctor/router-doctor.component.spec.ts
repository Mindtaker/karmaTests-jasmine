import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, of, Subject } from 'rxjs';

import { RouterDoctorComponent } from './router-doctor.component';

class FakeRouter {
  navigate(params: any) {}
}

// class FakeActivatedRouter {
//   // params: Observable<any> = EMPTY;

//   private subject = new Subject();

//   push(value: any) {
//     this.subject.next(value);
//   }

//   get params() {
//     return this.subject.asObservable();
//   }
// }

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterDoctorComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        // { provide: ActivatedRoute, useClass: FakeActivatedRouter }
        { provide: ActivatedRoute, useValue: { params: of({ id: 'new' }) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to doctor page when doctor is saved', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.saveDoctor();
    expect(spy).toHaveBeenCalledWith(['doctor', '123']);
  });

  it('should insert id=new', () => {
    component = fixture.componentInstance;
    // const activatedRoute: FakeActivatedRouter = TestBed.inject(ActivatedRoute);
    // activatedRoute.push({ id: 'new' });
    expect(component.id).toBe('new');
  });
});
