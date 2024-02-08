import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/interface';
import { message, user } from 'src/app/messages/login_assets/message';
import { ToastService } from 'src/app/services/popUp/toast-service.service';
import { data } from 'src/app/urls/api/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit{

  user:User[]=[]
  useraccess:string[]=[]
  username:any
  password:any
  selectedOfficer:any

  constructor(private route:Router,private http:HttpClient,private toastService:ToastService){}

  ngOnInit(): void {
    this.assignHeader()
    this.getUserAccessDetails()
    
  }

  
  assignHeader(){
    localStorage.removeItem('useraccess')
    localStorage.removeItem('username')
    localStorage.removeItem('status')
    sessionStorage.removeItem('loan_id')
    this.user = user
  }

  getUserAccessDetails(){
    this.http.get(data.userPass).subscribe({
      next:(response:any)=>{
        this.useraccess = response
      },
      error:(error:any)=>{
        console.log(error);
      }
    })
  }


  login(){    
    const userData = this.useraccess.find((u:any) => u.username === this.username && u.password === this.password && u.selectedOfficer === this.selectedOfficer.name);

    if(userData)    
    {
      localStorage?.setItem('username',this.username)
      localStorage?.setItem('useraccess',this.selectedOfficer.name)
      this.route.navigate(['home'])    
    }
    else{
      Swal.fire(message?.LoginFailed,message?.Error,'error')
    }
        
  }
}
