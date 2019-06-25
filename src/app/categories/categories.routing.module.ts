import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewCategoryComponent } from './new.category.component';
import { isLoggedGuard } from '../login/is.logged.guard';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [isLoggedGuard],
        data: {
            title: 'Categories'
        }
    },
    {
        path: 'categories/new',
        component: NewCategoryComponent,
        canActivate: [isLoggedGuard],
        data: {
            title: 'New category'
        }
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
  })
export class CategoriesRoutingModule {

}