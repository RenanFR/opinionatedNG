import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
    ]
})
export class LayoutModule {

}