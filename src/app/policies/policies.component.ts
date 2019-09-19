import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goClaim() {
    this.router.navigate(['claim']);
  }
}
