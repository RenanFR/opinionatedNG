import { NgModule } from '@angular/core';
import { NewCategoryComponent } from './new.category.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: 'new',
        component: NewCategoryComponent,
        canActivate: [  ],
        data: {
            title: 'New category'
        }
    },
];
@NgModule({
    declarations: [
        NewCategoryComponent
    ],
    imports: [
        LayoutModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        NewCategoryComponent
    ],
    providers: [
        CategoryService
    ],
    bootstrap: []
  })
export class CategoriesModule {

}