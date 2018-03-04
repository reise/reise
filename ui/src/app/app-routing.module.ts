import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TemplesComponent } from './temples/temples.component';
import { HomeComponent } from './home/home.component';
import { TestLoginComponent } from './test-login/test-login.component';

export const routes: Routes = [{
    path: '',
    component: TestLoginComponent
}];

// export const routes: Routes = [{
//     path: '',
//     component: TestLoginComponent
// }, {
//     path: 'login',
//     component: LoginPageComponent
// }, {
//     path: 'register',
//     component: RegisterComponent
// }, {
//     path: 'temples',
//     component: TemplesComponent
// }, {
//     path: 'contact',
//     component: ContactComponent
// }, {
//     path: 'home',
//     component: HomeComponent
// }];