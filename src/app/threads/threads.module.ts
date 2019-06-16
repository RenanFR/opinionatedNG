import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { Routes, RouterModule } from '@angular/router';
import { RecentThreadsComponent } from './recent.threads.component';

const routes: Routes = [
    {
        path: '', 
        component: RecentThreadsComponent,
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
        RecentThreadsComponent
    ],
    exports: [
        RecentThreadsComponent,
        RouterModule
    ],
    providers: [
    ]
})
export class ThreadsModule {

}