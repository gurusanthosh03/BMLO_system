import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { loader } from './services/loader/loader';
import { MessageService } from 'primeng/api';

import { SharedModule } from './shared_modules/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [loader,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
