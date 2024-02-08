import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { map } from 'rxjs';
import { LoanFullData } from 'src/app/interface/interface';
import { ApiMethodsService } from 'src/app/services/httpMethods/api-methods.service';
import { loader } from 'src/app/services/loader/loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{

  getAndShowFullDetails:LoanFullData[]=[]
  userAccess:any

  constructor(
    private router:Router,
    private apiService:ApiMethodsService,
    private load:loader){}

  ngOnInit(): void {
    this.getUserAccess()
    this.getFullDetails()
  }

  getUserAccess(){
    this.userAccess = localStorage?.getItem('useraccess')
  }

  // getFullDetails(){
  //   this.load?.showloader()
  //   this.apiService?.getFullSummaryData()?.pipe(
  //     map((response:any)=>{
  //         response.loan_date = moment(response?.loan_date)?.format('DD-MM-YYYY')
  //         response.dob = moment(response?.dob)?.format('DD-MM-YYYY')
  //         return response
  //     })
  //   ).subscribe({
  //     next:(response:LoanFullData[])=>{
  //       this.load?.hideloader()
  //       this.getAndShowFullDetails = response
  //     },
  //     error:(error:any)=>{
  //       this.load.hideloader()
  //       Swal.fire(error?.name,error?.name,'error')
  //       this.router.navigate(['home'])
  //     }
  //   })
  // }

  getFullDetails(){
    this.load?.showloader()
    this.apiService?.getFullSummaryData()?.pipe(
      map((response:any)=>{
          response.loan_date = moment(response?.loan_date)?.format('DD-MM-YYYY')
          response.dob = moment(response?.dob)?.format('DD-MM-YYYY')
          this.getAndShowFullDetails = response
          return response
      })
    )
    .subscribe({
      next:(response:LoanFullData[])=>{
        this.load?.hideloader()
        // this.getAndShowFullDetails = response
      },
      error:(error:any)=>{
        this.load.hideloader()
        Swal.fire(error?.name,error?.name,'error')
        this.router.navigate(['home'])
      }
    })
  }

}
