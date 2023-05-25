import { Component, OnInit } from '@angular/core';
import { Primo } from '../models/piatti.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-primi',
  templateUrl: './primi.component.html',
  styleUrls: ['./primi.component.css']
})
export class PrimiComponent {
  primi : Primo[]

  constructor(private router : Router){
    this.primi = this.router.getCurrentNavigation().extras.state as Primo[]
  }
}
