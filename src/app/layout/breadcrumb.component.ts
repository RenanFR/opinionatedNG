import { Component, OnInit } from "@angular/core";
import { BreadcrumbsService } from "./breadcrumbs.service";
import { Breadcrumb } from "./breadcrumb";

@Component({
    selector: 'vetweb-breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit{

    constructor(
        private breadcrumbsService: BreadcrumbsService
    ){}

    breadcrumbs: Map<string, Breadcrumb>;

    ngOnInit(): void {
        this.breadcrumbsService
        .breadcrumbSubject
        .asObservable()
        .subscribe(b => {
            this.breadcrumbs = b;
        });
    }

}