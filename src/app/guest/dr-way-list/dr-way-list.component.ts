import { Component } from '@angular/core';
import { GuestService } from 'src/app/service/guestData/guest.service';

@Component({
  selector: 'app-dr-way-list',
  templateUrl: './dr-way-list.component.html',
  styleUrls: ['./dr-way-list.component.css']
})
export class DrWayListComponent {
  drWayData:any[]=[]

  constructor(private guestService:GuestService){}

  SearchData(data:any){
    this.guestService.getDoctor(data).subscribe((data:any)=>{
      console.log(data)
      this.drWayData=data;
    })  
  }
}
