import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {component:LoginComponent,path:'login'},
  {component:HomeComponent,path:'home'},
  {component:SummaryComponent,path:'home/summary/:id'},
  {component:LoginComponent,path:''}, 
  {component:SignUpComponent,path:'signup'},
  {component:NotFoundComponent,path:'**',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
