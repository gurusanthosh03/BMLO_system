import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { homeViewData } from 'src/app/interface/interface';
import { header, hide_header, hide_keys, keys } from 'src/app/messages/home/header';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit{

    @Input() pipeLineData:homeViewData[]=[]
    @Input() userAccess :string = ''
    headers = header
    dataKey = keys
    hide_headers = hide_header
    hide_keys = hide_keys

    constructor(private router:Router){}

    ngOnInit(): void {
    }

    showFullDetails(homeData:any){
      sessionStorage?.setItem('loan_id',homeData.id)
      this.router.navigate([`home/summary/${homeData.id}`])
    }

    getStatusColorClass(status: string): string {      
      if (status === 'Approved') {
        return 'green';
      }
      else if (status === 'Denied') {
        return '#f00c0c';
      }
      else if(status === 'Pending'){
        return 'rgb(108, 180, 209)'
      }
      else {
        return ''; 
      }
    }

    
}
