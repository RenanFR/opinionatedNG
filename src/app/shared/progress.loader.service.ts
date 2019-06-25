import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { LoadingType } from "./loading.type";
import { startWith } from "rxjs/operators";

@Injectable()
export class ProgressLoaderService {

    private subjectLoader = new Subject<LoadingType>();

    public loading(): Observable<LoadingType> {
        return this.subjectLoader.asObservable().pipe(startWith(LoadingType.STOP));
    }

    public start(): void {
        this.subjectLoader.next(LoadingType.START);
    }

    public stop(): void {
        this.subjectLoader.next(LoadingType.STOP);
    }

}