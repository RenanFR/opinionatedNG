import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../shared/token.service';
import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'opinionated-categories',
    templateUrl: './categories-component.html'
  })
export class CategoriesComponent implements OnInit {

    public categories: Category[];

    constructor(
        private service: CategoryService,
        private tokenService: TokenService,
        private currentRoute: ActivatedRoute,
        private notifier: NotificationService,
        private router: Router
    ){
    }

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