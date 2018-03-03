import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TemplesComponent } from './temples/temples.component';
import { HomeComponent } from './home/home.component';
const routes : Routes = [

{
path: 'login',
component: LoginPageComponent

},

{
  path: 'register',
  component: RegisterComponent
  
  },
  
  {
    path: 'temples',
    component: TemplesComponent
    
    },
    {
      path: 'contact',
      component: ContactComponent
      
      },
      {
        path: 'home',
        component: HomeComponent
        
        }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent = [ HomeComponent, LoginPageComponent, RegisterComponent, TemplesComponent, ContactComponent]
