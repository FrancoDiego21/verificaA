import { Component } from '@angular/core';
import { Piatti } from './models/piatti.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  URL = "https://my-json-server.typicode.com/paolocarugati/semivuota/db"
  data: Piatti;
  oPiatti : Observable<Piatti>;
  


  constructor(public http: HttpClient){

  }

  ngOnInit(): void {
    this.oPiatti = this.http.get<Piatti>(this.URL);
    this.oPiatti.subscribe( d => {
      this.data = d;
    });
  }
}
