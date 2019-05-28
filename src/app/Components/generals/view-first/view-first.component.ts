import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../../service/get-json.service';

@Component({
  selector: 'app-view-first',
  templateUrl: './view-first.component.html',
  styleUrls: ['./view-first.component.css']
})
export class ViewFirstComponent implements OnInit {

  constructor( private Service: GetJsonService) { }

public datos =
{
  id: 600,
nombre: 'Ricardo',
usuario: 'Antonio',
telefono: 'Hernandez',
direccion: 'caaca'
};

public getdata = function()
{
  this.Service.getConfig().subscribe(resp => {
    const response =  resp;
    console.log(response);
 },
 error =>{
   console.log(JSON.stringify(error));
 }
 
 );
}

  ngOnInit() {
    this.Service.getConfig().subscribe(resp => {
      const response =  resp;
      console.log(response);
   },
   error =>{
     console.log(JSON.stringify(error));
   }
   
   );
  }

  public Submit = function() {
    this.showPostForm = false;
    return this.Service.PostConfig(this.datos).subscribe(res=>
      {
        const response =  res;
    console.log(response);
        this.getdata();
      },
      error =>{
        console.log(JSON.stringify(error));
      }
      );

  };

  



}
