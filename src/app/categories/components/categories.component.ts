import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
    selector: 'opinionated-categories',
    templateUrl: '../templates/categories-component.html'
  })
export class CategoriesComponent implements OnInit {

    public categories: Category[];

    constructor(
        private service: CategoryService,
        private tokenService: TokenService,
        private currentRoute: ActivatedRoute,
        private notifier: NotificationService,
        private router: Router
    ){}

    ngOnInit(): void {
        let isRedirect: boolean = this.currentRoute.snapshot.queryParams['redirectAfterAuth'];
        if (isRedirect) { this.notifier.info('User authenticated successfully', true); }
        this.service.getAll().subscribe(
            (list) => {
                console.log(`Retrieving ${list.length} categories`);
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