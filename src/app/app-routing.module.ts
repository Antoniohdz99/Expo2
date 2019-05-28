import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ViewFirstComponent } from './Components/generals/view-first/view-first.component';
import { ViewSecondComponent } from './Components/generals/view-second/view-second.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'formulario', component: ViewFirstComponent},
  {path: 'tabla', component: ViewSecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
