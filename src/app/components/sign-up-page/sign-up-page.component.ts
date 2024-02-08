import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/interface';
import { message, user } from 'src/app/messages/login_assets/message';
import { data } from 'src/app/urls/api/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

  user:User[]=[]
  useraccess:string[]=[]
  username:any
  password:any
  selectedOfficer:any
  key:any


  constructor(private route:Router,private http:HttpClient){}

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


  signUp(){    

    const singUpData = {
      username : this.username,
      password:this.password,
      selectedOfficer:this.selectedOfficer.name,
      key:this.key
    }
    
    this.http.post(`${data.userPass}`,singUpData).subscribe({
      next:(response:any)=>{
        console.log(response);
        Swal.fire(message?.signUpSuccess,message?.pleaseLogin,'success')
        this.route.navigate(['login'])
      },
      error:(error:any)=>{
        console.log(error);
      }

    })
        
  }

}
