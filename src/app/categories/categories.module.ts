import { NgModule } from '@angular/core';
import { NewCategoryComponent } from './components/new.category.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories.routing.module';

@NgModule({
    declarations: [
        NewCategoryComponent,
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        CategoriesRoutingModule,
        LayoutModule,
        SharedModule
    ],
    exports: [
        NewCategoryComponent,
        CategoriesComponent
    ],
    providers: [
        CategoryService
    ],
    bootstrap: []
  })
export class CategoriesModule {

}