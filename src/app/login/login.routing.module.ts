import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthenticationBaseComponent } from './auth.base.component';
import { EnableToLogin } from './enable.to.login';

const routes: Routes = [
    {
        path: 'login',
        component: AuthenticationBaseComponent,
        canActivate: [EnableToLogin],
        data: {
          title: 'Authentication'
        },
        children: [
          {
            path: '', 
            component: LoginComponent
          }
        ]
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
export class LoginRoutingModule {

}