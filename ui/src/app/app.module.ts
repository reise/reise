//framework modules
import { NgModule,  Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule, MatSelectModule } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
// import { SwiperModule } from 'swiper';
//components pipes and services
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplesComponent } from './temples/temples.component';
import { TempleDataService } from './temple-data.service';
import { AdminDataService } from './admin-data.service';
import { TempledetailsService } from './templedetails.service';
//routes
import { routes } from './app-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { NotificationComponent } from './notification/notification.component';
import { TempleDetailsComponent } from './temple-details/temple-details.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatToolbarModule,
        MatCardModule,
        
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
        ViewBookingComponent,
        NotificationComponent,
        TempleDetailsComponent
    ],
    providers: [TempleDataService, AdminDataService, TempledetailsService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

 export class AppModule { };
