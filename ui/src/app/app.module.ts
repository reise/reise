
//framework modules
import { NgModule,  Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
//components pipes and services
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplesComponent } from './temples/temples.component';
import { TempleDataService } from './temple-data.service';
//routes
import { routes } from './app-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatTableModule,
        HttpClientModule,
       
        //this should always be last
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TemplesComponent,
        HeaderComponent,
        ContactComponent,
        AdminPanelComponent,
        ViewBookingComponent
    ],
    providers: [TempleDataService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

 export class AppModule { };
