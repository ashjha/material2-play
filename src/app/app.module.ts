import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {OVERLAY_PROVIDERS} from "@angular2-material/core";

// Material 2 

import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import { MdToolbarModule,MdToolbarRow } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdInputModule } from '@angular2-material/input';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';


import 'hammerjs' ;

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule.forRoot(),
    MdCardModule.forRoot(),
    MdButtonModule.forRoot(),
    MdRadioModule.forRoot(),    
    MdCheckboxModule.forRoot(),
    MdTooltipModule.forRoot(),
    MdSliderModule.forRoot(),
    MdIconModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdInputModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    
  ],
  providers: [OVERLAY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
