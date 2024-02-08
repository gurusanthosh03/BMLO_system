import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { homeViewData } from 'src/app/interface/interface';
import { message } from 'src/app/messages/login_assets/message';
import { ApiMethodsService } from 'src/app/services/httpMethods/api-methods.service';
import { loader } from 'src/app/services/loader/loader';
import { ToastService } from 'src/app/services/popUp/toast-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  pipeLineData:homeViewData[]=[]
  userAccess:any
  userName:any 
  statusToast:any

  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router,
    private load:loader,
    private apiService:ApiMethodsService,
    private toastService:ToastService){}

  ngOnInit(): void {
    this.getManagerResponse()
    this.getAndSetDataFromApi()
  }

  getManagerResponse() {
    sessionStorage?.removeItem('loan_id')
    this.userName = localStorage?.getItem('username');
    this.userAccess = localStorage?.getItem('useraccess');    
    
    if(localStorage.getItem('status'))
    {
      this.statusToast = localStorage?.getItem('status')
      this.showToast(this.statusToast);
      localStorage?.removeItem('status')
    }
  }

  showToast(status:string){
    if(status=='Approved')
    {
      this.toastService?.acceptToast()
    }
    else if(status=='Denied')
    {      
      this.toastService?.deniedToast()
    }
  }

  getAndSetDataFromApi(){
    if(localStorage.getItem('username'))
    {
      this.load?.showloader()
      this.apiService?.getHomeData()?.pipe(
        map((response:homeViewData[])=>{
          return response?.map((i:any)=>{
            i.loan_amount = `$${i.loan_amount}`          
            i.loan_date = moment(i.loan_date)?.format('DD-MM-YYYY')
            return i;
          })
        })
      ).subscribe({
        next:(response:homeViewData[])=>{
          this.load?.hideloader()
          this.pipeLineData = response    
          
        },
        error:(error:any)=>{
          this.load?.hideloader()
          Swal.fire(error?.name,error,'error')
          this.router.navigate([''])
        }
      })
    }
    else{
      this.router.navigate(['**'])
    }
  }

  logout(){
    localStorage.removeItem('username')
    sessionStorage.removeItem('useraccess')
    this.router.navigate(['login'])
    Swal.fire(message?.ThankYou,message?.logoutSuccess,'success')
  }

}
