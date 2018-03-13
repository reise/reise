import { Routes } from '@angular/router';
import { LogListingComponent } from './log-listing/log-listing.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
},{
    path: 'list',
    component: LogListingComponent
}];