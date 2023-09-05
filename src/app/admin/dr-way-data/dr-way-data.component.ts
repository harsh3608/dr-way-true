import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/adminData/admin.service';

@Component({
  selector: 'app-dr-way-data',
  templateUrl: './dr-way-data.component.html',
  styleUrls: ['./dr-way-data.component.css']
})
export class DrWayDataComponent implements OnInit {
  constructor(private AdminService:AdminService) {}
  ngOnInit(): void {
    this.getData()
  }
  drWayData:any[]=[]
  SingleDrData:any=[]

  getData(){
    this.AdminService.read().subscribe((data:any)=>{
      this.drWayData=data;
    })
  }

  SendCreateData(data:any){
    this.AdminService.create(data).subscribe((data:any)=>{})
    this.getData()
  }

  deleteData(data:any){
    this.AdminService.delete(data).subscribe((data:any)=>{
      this.getData()
    })
    this.getData()
  }

  SendEditData(data:any){
    this.AdminService.update(data).subscribe((data:any)=>{
      this.getData()
    })
    this.getData()
  }
  
  editData(data:any){
    this.SingleDrData=data
  }
}
