import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthenticationBaseComponent } from './auth.base.component';
import { EnableToLogin } from './enable.to.login';
import { UserRegistrationComponent } from './user.registration.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticationBaseComponent,
        canActivate: [EnableToLogin],
        data: {
          title: 'Authentication'
        },
        children: [
          {
            path: 'login', 
            component: LoginComponent
          },
          {
            path: 'register-user', 
            component: UserRegistrationComponent
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