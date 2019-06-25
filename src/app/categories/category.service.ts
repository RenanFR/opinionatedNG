import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base:string = `${environment.WS_ADDRESS}/categories`;
@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {

    }

    public save(category: Category): Observable<any> {
        console.log(`Category ${category.description} sent to save service`);
        return this.http.post(base, category, {responseType: 'text'});
    }

    public getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(base);
    }

}