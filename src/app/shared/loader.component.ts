import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProgressLoaderService } from "./progress.loader.service";
import { map } from "rxjs/operators";

@Component({
    selector: 'opinionated-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    
    loader$: Observable<string>;
    
    constructor(
        private progressLoaderService: ProgressLoaderService
    ) { }
        
    ngOnInit(): void {
        this.loader$ = this.progressLoaderService.loading().pipe(map((loadType) => loadType.valueOf()));
    }
}