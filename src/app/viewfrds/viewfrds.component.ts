import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfrds',
  templateUrl: './viewfrds.component.html',
  styleUrls: ['./viewfrds.component.css']
})
export class ViewfrdsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.frdsData=data
      }
    )
  }
  
  frdsData:any=[]
  ngOnInit(): void {
  }

}
