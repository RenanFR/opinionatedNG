import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
    selector: 'opinionated-new-category',
    templateUrl: './new-category-component.html'
  })
export class NewCategoryComponent implements OnInit {
    
    public categoryForm: FormGroup;
    
    constructor(
        public builder: FormBuilder,
        public service: CategoryService
    ) {
        
    }

    ngOnInit(): void {
        this.categoryForm = this.builder.group({
            description: ['']
        });
    }

    public saveCategory(): void {
        let description: string = this.categoryForm.get('description').value;
        this.service.save(new Category(description));
    }

}