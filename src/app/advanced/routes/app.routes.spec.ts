import { routes } from "./app.routes";
import { DoctorComponent } from "src/app/intermediate2/doctor/doctor.component";

describe('Main routes', () => {

  it('should exist route /doctor/:id ', () => {
    expect(routes).toContain({ path: 'doctor/:id', component: DoctorComponent })
  });


});