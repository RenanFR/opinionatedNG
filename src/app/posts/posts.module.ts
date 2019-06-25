import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { RecentPostsComponent } from './recent.posts.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts.routing.module';

@NgModule({
    imports: [
        LayoutModule,
        PostsRoutingModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        RecentPostsComponent
    ],
    exports: [
        RecentPostsComponent
    ],
    providers: [
    ]
})
export class PostsModule {

}