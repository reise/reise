import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './logs-routing.module';

import { LogListingComponent } from './log-listing/log-listing.component';
import { LogDetailsComponent } from './log-details/log-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        LogListingComponent,
        LogDetailsComponent
    ],
    bootstrap: [
        LogListingComponent
    ]
})
export class LoggingModule { }