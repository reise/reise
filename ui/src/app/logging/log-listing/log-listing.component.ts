import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterGroup } from "../../models/filter.model";

@Component({
    selector: 'app-log-listing',
    templateUrl: './log-listing.component.html',
    styleUrls: ['./log-listing.component.css']
})
export class LogListingComponent implements OnInit {

    @Input()
    public filterGroup: FilterGroup;

    @Input()
    public count: number;

    @Input()
    public orderByParams: Array<string>;

    @Output()
    public pageChanged : EventEmitter<any> = new EventEmitter();

    public constructor() { }

    public ngOnInit(): void {
        this.filterGroup = this.filterGroup || new FilterGroup();
        this.filterGroup.page = this.filterGroup.page || 1;
        this.filterGroup.size = this.filterGroup.size || 20;
        this.count = this.count || 0;
    }

    public onPaginationChanged(): void {
        this.pageChanged.next(this.filterGroup);
    }
}
