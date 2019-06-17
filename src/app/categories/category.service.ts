import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {

    }

    public save(category: Category): Observable<any> {
        console.log(category.description);
        return null;
    }

}