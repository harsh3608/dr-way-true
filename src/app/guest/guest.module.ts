import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrWayListComponent } from './dr-way-list/dr-way-list.component';
import { GuestRoutingModule } from './guest-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DrWayListComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule
  ]
})
export class GuestModule { }
