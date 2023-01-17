import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';

describe('Doctor Component', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorComponent],
      providers: [DoctorService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return the name of the doctor', () => {
    const name = 'Dr. John Doe';
    expect(component.greetDoctor(name)).toContain(name);
  });
});


// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CustomerDataComponent } from './customer-data.component';

// describe('CustomerDataComponent', () => {
//   let component: CustomerDataComponent;
//   let fixture: ComponentFixture<CustomerDataComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CustomerDataComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CustomerDataComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });