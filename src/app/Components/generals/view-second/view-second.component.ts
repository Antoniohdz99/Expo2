import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../../service/get-json.service';


@Component({
  selector: 'app-view-second',
  templateUrl: './view-second.component.html',
  styleUrls: ['./view-second.component.css']
})
export class ViewSecondComponent implements OnInit {

  constructor(private Service: GetJsonService) { }

  public Datos;

  public getdata = function()
{
  this.Service.getConfig().subscribe(resp => {
    const response =  resp;
    console.log(response);
 },
 error =>{
   console.log(JSON.stringify(error));
 });
}

  public delete = function() {
    this.showPostForm = false;
    return this.Service.dropConfig(1).subscribe(res=>
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


  ngOnInit() {
    this.Service.getConfig().subscribe(resp => {
      const response =  resp;
      this.Datos=response;
   },
   error =>{
     console.log(JSON.stringify(error));
   });
  }


  

}
