import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { Routes, RouterModule } from '@angular/router';
import { RecentPostsComponent } from './recent.posts.component';

const routes: Routes = [
    {
        path: '', 
        component: RecentPostsComponent,
        canActivate: [  ],
        data: {
            title: 'Recent Threads'
        }
    },
];
@NgModule({
    imports: [
        LayoutModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        RecentPostsComponent
    ],
    exports: [
        RecentPostsComponent,
        RouterModule
    ],
    providers: [
    ]
})
export class PostsModule {

}