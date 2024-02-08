import { Injectable,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/urls/api/api';
import { LoanFullData, homeViewData } from 'src/app/interface/interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMethodsService implements OnInit{

  loan_id:any

  constructor(
    private http:HttpClient,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }


  getHomeData():Observable<homeViewData[]>{
    return this.http.get<homeViewData[]>(data?.api)
  }

  getFullSummaryData(): Observable<LoanFullData[]> {
    this.loan_id = sessionStorage.getItem('loan_id')    
    return this.http.get<LoanFullData[]>(`${data?.detailsApi}/${this.loan_id}`);
  }

}
