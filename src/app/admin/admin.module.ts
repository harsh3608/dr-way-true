import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrWayDataComponent } from './dr-way-data/dr-way-data.component';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DrWayDataComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
