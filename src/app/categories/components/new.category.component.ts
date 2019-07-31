import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
    selector: 'opinionated-new-category',
    templateUrl: '../templates/new-category-component.html'
  })
export class NewCategoryComponent implements OnInit {
    
    public categoryForm: FormGroup;
    
    constructor(
        public builder: FormBuilder,
        public service: CategoryService,
        public notificationService: NotificationService,
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
            this.notificationService.success(`Alerting inclusion of category ${description}`, true);
            this.router.navigateByUrl('/categories');
        });
    }

}