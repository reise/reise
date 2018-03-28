import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TemplesComponent } from './temples/temples.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [ {
    path: 'login',
    component: LoginComponent
}, 
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'register',
    component: RegisterComponent
}, {
    path: 'logs',
    loadChildren: 'app/logging/logging.module#LoggingModule'
},

{
     path: 'temples',
     component: TemplesComponent
 },
  {    path: 'contact',
    component: ContactComponent
 }, 

];