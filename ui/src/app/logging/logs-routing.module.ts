import { Routes } from '@angular/router';
import { LogListingComponent } from './log-listing/log-listing.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
}, {
    path: 'list',
    component: LogListingComponent
}, {
    path: 'details',
    component: LogListingComponent
}, {
    path: 'request',
    component: LogListingComponent
}, {
    path: 'response',
    component: LogListingComponent
}, {
    path: 'metadata',
    component: LogListingComponent
}];