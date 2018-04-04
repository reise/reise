import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TemplesComponent } from './temples/temples.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

export const routes: Routes = [{
        path: '',
        component: HomeComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        //lazy loading
        path: 'logs',
        loadChildren: 'app/logging/logging.module#LoggingModule'
    }, {
        path: 'temples',
        component: TemplesComponent
    }, {
        path: 'contact',
        component: ContactComponent
    }, {
        path: 'user-admin',
        component: AdminPanelComponent
}];