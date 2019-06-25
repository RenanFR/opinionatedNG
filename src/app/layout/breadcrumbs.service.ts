import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Breadcrumb } from "./breadcrumb";

@Injectable()
export class BreadcrumbsService {

    breadcrumbs: Map<string, Breadcrumb> = new Map([ ['default', {link: 'breadcrumb', isActive: true}] ]);

    public breadcrumbSubject = new BehaviorSubject<Map<string, Breadcrumb>>(this.breadcrumbs);

}