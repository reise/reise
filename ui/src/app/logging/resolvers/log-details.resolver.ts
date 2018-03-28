import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LogParameter } from "../../models/log.model";


@Injectable()
export class LogDetailsResolver implements Resolve<Promise<any>> {
    
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

        let logParam: LogParameter = null;
        logParam = route.queryParams.lp;
        return null;


        // return new Promise()
    }
}