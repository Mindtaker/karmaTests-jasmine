import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HospitalComponent } from 'src/app/intermediate2/hospital/hospital.component';
import { DoctorComponent } from 'src/app/intermediate2/doctor/doctor.component';
import { IncrementerComponent } from 'src/app/intermediate2/incrementer/incrementer.component';

export const routes: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'doctor/:id', component: DoctorComponent },
  { path: '**', component: IncrementerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
