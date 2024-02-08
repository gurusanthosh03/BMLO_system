import { NgModule } from '@angular/core';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginpageComponent } from 'src/app/components/loginpage/loginpage.component';
import { SummaryComponent } from 'src/app/pages/summary/summary.component';
import { HomeTableComponent } from 'src/app/components/home-table/home-table.component';
import { SummaryDetailsComponent } from 'src/app/components/summary-details/summary-details.component';

import { NotFoundComponent } from '../pages/not-found/not-found.component';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { DataViewModule } from 'primeng/dataview';
import { PasswordModule } from 'primeng/password';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { SignUpPageComponent } from '../components/sign-up-page/sign-up-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    LoginpageComponent,
    SummaryComponent,
    HomeTableComponent,
    SummaryDetailsComponent,
    SignUpComponent,
    SignUpPageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    ToolbarModule,
    SplitterModule,
    DividerModule,
    CardModule,
    FileUploadModule,
    InputTextareaModule,
    OverlayPanelModule,
    TooltipModule,
    ToastModule,
    DataViewModule,
    PasswordModule

  ]
})
export class SharedModule { }
