import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-doctor',
  templateUrl: './router-doctor.component.html',
  styles: [],
})
export class RouterDoctorComponent implements OnInit {
  id!: string;

  constructor(private router: Router, public activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  saveDoctor() {
    this.router.navigate(['doctor', '123']);
  }
  
}

