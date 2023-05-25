import { Component } from '@angular/core';
import { Secondo } from '../models/piatti.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondi',
  templateUrl: './secondi.component.html',
  styleUrls: ['./secondi.component.css']
})
export class SecondiComponent {
  secondi : Secondo[];

  constructor(private router : Router){
    this.secondi = this.router.getCurrentNavigation().extras.state as Secondo[]
  }
}
