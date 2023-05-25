import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimiComponent } from './primi/primi.component';
import { SecondiComponent } from './secondi/secondi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'primi', component : PrimiComponent},
  { path : 'secondi', component : SecondiComponent},
  { path : 'home', component : HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
