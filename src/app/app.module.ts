import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app-routing.module';
import {MaterialModule} from '@angular/material';
import {OVERLAY_PROVIDERS} from "@angular2-material/core";
// Material 2 
import {SimpleNotificationsModule} from 'angular2-notifications';
import 'hammerjs' ;
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { RoleComponent } from './role/role.component';
import { Angular2NotificationComponent } from './angular2-notification/angular2-notification.component';

import {CoreService} from './shared/core.service';
import {MyDatePickerModule} from 'mydatepicker'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildComponent,
    RoleComponent,
    Angular2NotificationComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MyDatePickerModule,
    MaterialModule.forRoot(),
    SimpleNotificationsModule,
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
