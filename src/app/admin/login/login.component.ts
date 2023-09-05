import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/adminData/admin.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router, 
    private adminService:AdminService,
    private authService: AuthService
  ){}

  checkUser(data:any){
    this.authService.login(data).subscribe((data:any)=>{
      this.router.navigateByUrl('/DrWayData');
    })
  }
}
