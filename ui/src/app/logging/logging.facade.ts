import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseFacade } from "../models/base.facade";
import { Log } from "../models/log.model";
import { Response, Page } from "../models/response.model";
import { FilterGroup } from "../models/filter.model";

@Injectable()
export class LoggingFacade extends BaseFacade{

    public constructor(private _HttpClient: HttpClient) {
        super();
    }

    public getLogs(filterGroup: FilterGroup): Promise<Page<Log>> {
        return this.parseResponse<Page<Log>>(this._HttpClient.post('/api/logs/all', filterGroup));
    }

    public getLogDetails(): Promise<Log> {
        return null;
    }
}