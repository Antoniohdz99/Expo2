import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule  } from '@angular/router';

import { NavbarComponent } from './Components/generals/navbar/navbar.component';
import { ViewFirstComponent } from './Components/generals/view-first/view-first.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewSecondComponent } from './Components/generals/view-second/view-second.component';
import { HttpClientModule } from '@angular/common/http';
import { GetJsonService } from './Components/service/get-json.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewFirstComponent,
    HomeComponent,
    ViewSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    GetJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
