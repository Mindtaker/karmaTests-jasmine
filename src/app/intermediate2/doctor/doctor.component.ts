import { Component } from '@angular/core';

import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [],
})
export class DoctorComponent {
  doctors: any[] = [];

  constructor(private doctorService: DoctorService) {}

  greetDoctor(name: string) {
    return `Hello ${name}`;
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe({
      next: (doctors: any) => {
        this.doctors = doctors;
      }
    });
  }
}
