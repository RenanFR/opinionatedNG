import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';
import { TokenService } from '../shared/token.service';

@Component({
    selector: 'opinionated-categories',
    templateUrl: './categories-component.html'
  })
export class CategoriesComponent implements OnInit {

    public categories: Category[];
    public testMessage: string = 'Text default';

    constructor(
        private service:CategoryService,
        private tokenService:TokenService,
        private router:Router
    ){
    }

    ngOnInit(): void {
        this.service.getAll().subscribe(
            (list) => {
                console.log(`Retrieving ${list.length} categories`);
                this.testMessage = 'Text changed by the subscribe';
                this.categories = list;
            },
            (errorResponse) => {
                console.log(errorResponse.error.message);
                if (errorResponse.error.exception === 'io.jsonwebtoken.ExpiredJwtException') {
                    this.tokenService.removeToken();
                    this.router.navigate(['']);
                }
            });
    }
    
}