import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrWayListComponent } from './dr-way-list/dr-way-list.component';

const routes: Routes = [
  {
    path:'', component: DrWayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
