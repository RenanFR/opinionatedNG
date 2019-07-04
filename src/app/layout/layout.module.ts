import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbsService } from './breadcrumbs.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        BreadcrumbComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        BreadcrumbComponent,
        FooterComponent
    ],
    providers: [
        BreadcrumbsService
    ]
})
export class LayoutModule {

}