import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './/app-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   routingComponent,
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
