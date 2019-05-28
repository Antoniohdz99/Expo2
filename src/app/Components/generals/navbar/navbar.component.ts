import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetJsonService } from '../../service/get-json.service';

 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 public vista: string = 'Inicio';
  constructor(private router: Router, private Service: GetJsonService) { }
  public home = function() {
    this.router.navigate(['']);
    this.vista = 'Inicio';
  };



  public formulario = function() {
    this.router.navigate(['formulario']);
    this.vista = 'formulario';
  };

  public tabla = function() {
    this.router.navigate(['tabla']);
    this.vista = 'tabla';
  };

  
  ngOnInit() {
    this.Service.getConfig().subscribe(resp => {
       const response =  resp;
       console.log(response);
    });
  }

}
