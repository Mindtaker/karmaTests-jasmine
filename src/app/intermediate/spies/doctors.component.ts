import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-doctors',
  template: ` <p>doctors works!</p> `,
  styles: [],
})
export class DoctorsComponent implements OnInit {
  public doctors: any[] = [];
  public errorMessage: string = '';

  constructor(public _doctorsService: DoctorsService) {}

  ngOnInit() {
    this._doctorsService
      .getDoctors()
      .subscribe((doctors: any) => (this.doctors = doctors));
  }

  addDoctor() {
    const doctor = { name: 'Juan Carlos doctor' };

    this._doctorsService.addDoctor(doctor).subscribe({
      next: (doctorDB: any) => this.doctors.push(doctorDB),
      error: (err: any) => (this.errorMessage = err),
    });
  }

  deleteDoctor(id: string) {
    const okay = confirm('Are you sure you want to delete this doctor?');

    if (okay) {
      this._doctorsService.deleteDoctor(id);
    }
  }
}
