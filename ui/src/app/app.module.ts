import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
