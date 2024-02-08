import { HttpClient } from '@angular/common/http';
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { data } from 'src/app/urls/api/api';
import { LoanFullData } from 'src/app/interface/interface';
import { message } from 'src/app/messages/login_assets/message';
import { HeaderKey, key, popUp } from 'src/app/messages/summary/summary';
import { hardcodedDetails, table_columns } from 'src/app/messages/user_record/user_record';
import { ApiMethodsService } from 'src/app/services/httpMethods/api-methods.service';
import { loader } from 'src/app/services/loader/loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.scss']
})
export class SummaryDetailsComponent implements OnInit{

  @Input() getAndShowFullDetails:LoanFullData[]=[]
  @Input() userAccess:string=''
  headerKeys = HeaderKey
  keys = key
  id : any = 0
  reasonValue:any

  DataUpdate = {
    loan_status:'',
    status_reason:'None'
  }

  constructor(
    private router:Router,
    private activateRoute:ActivatedRoute,
    private http:HttpClient,
    private apiService:ApiMethodsService,
    private messageService:MessageService
  ){}

  ngOnInit(): void {
    this.getId()
  }


  getId(){
    this.activateRoute.params.subscribe((response:any)=>{
        this.id = response.id      
    })
  }

 
  navigationToHome(status:string){
    localStorage?.setItem('status',status)
    this.router.navigate(['home'])
  }

  statusApproved(){
    this.DataUpdate.loan_status = 'Approved';
    this.DataUpdate.status_reason = '-'
    this.checkStatus(this.DataUpdate)
  }

  statusDenied(){
    this.DataUpdate.loan_status = 'Denied';
    this.DataUpdate.status_reason =this.reasonValue
    this.checkStatus(this.DataUpdate)
  }

  statusPending(){
    this.DataUpdate.loan_status = 'Pending';
    this.DataUpdate.status_reason = this.reasonValue
    this.checkStatus(this.DataUpdate)
  }

  checkStatus(DataUpdate:any){
    if(DataUpdate.loan_status == 'Approved')
    {
        this.postStatus(DataUpdate)
        this.navigationToHome(DataUpdate.loan_status)
    }
    else if(DataUpdate.loan_status == 'Denied')
    {
        this.postStatus(DataUpdate)
        // Swal.fire(popUp.statusSuccess,popUp.subStatus,'success')
        this.navigationToHome(DataUpdate.loan_status)
    }
    else if(DataUpdate.loan_status == 'Pending')
    {
      this.postStatus(DataUpdate)
      this.navigationToHome(DataUpdate.loan_status)
    }
  }

  postStatus(DataUpdate:any){
      this.id = sessionStorage?.getItem('loan_id')
      this.http.put(`${data.api}/${this.id}`,DataUpdate)?.subscribe({
        next : (response:any)=>{
          console.log(response);
          sessionStorage?.removeItem('loan_id')
          return true;
        },
        error:(error:any)=>{
          Swal.fire(error.name,error.name,'error')
          return false
        }
      })
  }
  
  exportPdf(id: number) {
    console.log(id);
    
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((autoTable) => {
        const doc: any = new jsPDF.default('p', 'px', 'a4');
        const exportColumns = table_columns; 

        if (Object.keys(hardcodedDetails).includes(id.toString())) {
          const data = hardcodedDetails[id]; 
          const tableData = [];
  
          tableData.push([data.panNumber, data.markSheetDetails, data.assets]);
  
          const styles = {
            theme: 'grid', 
            styles: { cellPadding: 5, fontSize: 10, fontStyle: 'normal', overflow: 'linebreak' },
            columnStyles: { 0: { cellWidth: autoTable }, 1: { cellWidth: autoTable }, 2: { cellWidth: 'auto' } }
          };
  
          doc.autoTable(exportColumns, tableData, styles);
  
          doc.save(`Attachments_${id}.pdf`);
        } else {
          console.error('No matching hardcoded data found for the provided ID.');
        }
      });
    });
  }

}
