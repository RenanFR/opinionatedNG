import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './components/categories.component';
import { isLoggedGuard } from '../login/utilities/is.logged.guard';
import { NewCategoryComponent } from './components/new.category.component';

const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [ isLoggedGuard ],
        data: {
            title: 'Categories'
        }
    },
    {
        path: 'categories/new',
        component: NewCategoryComponent,
        canActivate: [ isLoggedGuard ],
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