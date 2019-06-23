import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from './category.service';
import { Category } from './category';
import { Router } from '@angular/router';

@Component({
    selector: 'opinionated-new-category',
    templateUrl: './new-category-component.html'
  })
export class NewCategoryComponent implements OnInit {
    
    public categoryForm: FormGroup;
    
    constructor(
        public builder: FormBuilder,
        public service: CategoryService,
        public router: Router
    ) {
        
    }

    ngOnInit(): void {
        this.categoryForm = this.builder.group({
            description: ['']
        });
    }

    public saveCategory(): void {
        let description: string = this.categoryForm.get('description').value;
        this.service.save(new Category(description)).subscribe((responseText) => {
            console.log(responseText);
            this.router.navigate(['/categories']);
        });
    }

}