import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
    selector: 'opinionated-categories',
    templateUrl: './categories-component.html'
  })
export class CategoriesComponent implements OnInit {

    public categories: Category[];

    constructor(
        private service:CategoryService
    ){
    }

    ngOnInit(): void {
        this.service.getAll().subscribe((list) => {
            console.log(`Retrieving ${list.length} categories`);
            this.categories = list;
        });
    }
    
}