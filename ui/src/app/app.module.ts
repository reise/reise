import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        // HeaderComponent,
        TestLoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
