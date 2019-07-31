import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentPostsComponent } from './components/recent.posts.component';
import { isLoggedGuard } from '../login/utilities/is.logged.guard';


const routes: Routes = [
    {
        path: 'posts', 
        component: RecentPostsComponent,
        canActivate: [ isLoggedGuard ],
        data: {
            title: 'Recent Threads'
        }
    },
    {
        path: 'new', 
        component: RecentPostsComponent,
        canActivate: [ isLoggedGuard ],
        data: {
            title: 'Recent Threads'
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
export class PostsRoutingModule {

}