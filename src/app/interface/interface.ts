export interface homeViewData {
    id: number;
    loan_number: number;
    borrower_name: string;
    coborrower_name: string;
    loan_date: number;
    loan_amount: number;
    loan_status: string;
    loan_type: string;
    address?: string; 
    cibil_score?: number;
    contact_no?: number; 
  }

export interface LoanFullData {
    loan_number: number;
    borrower_name: string;
    coborrower_name: string;
    loan_date: number;
    loan_amount: number;
    loan_status: string;
    loan_type: string;
    address: string;
    cibil_score: number;
    contact_no: number;
    dob: number;
    income: number;
    job: string;
    assets: boolean;
    interest: number;
    coborrower_contact: number;
    coborrower_relation: string;
    id: number;
  }
  

export interface User {
    name: string;
  }