import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnableToLogin } from './utilities/enable.to.login';
import { AuthenticationBaseComponent } from './components/auth.base.component';
import { LoginComponent } from './components/login.component';
import { UserRegistrationComponent } from './components/user.registration.component';
import { BarCodeScanningComponent } from './components/barcode.scanning.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticationBaseComponent,
        canActivate: [ EnableToLogin ],
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
      },
      {
          path: 'barcode/:qrCode', 
          component: BarCodeScanningComponent,
          data: {
              title: 'Bar code for authentication'
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
export class LoginRoutingModule {

}