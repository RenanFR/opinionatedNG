import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthenticationBaseComponent } from './auth.base.component';
import { EnableToLogin } from './enable.to.login';
import { SharedModule } from '../shared/shared.module';
import { isLoggedGuard } from './is.logged.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserExistsValidator } from './user.exists.validator';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { getGoogleClientCredentials } from './google.configuration';
import { LoginRoutingModule } from './login.routing.module';
import { UserRegistrationComponent } from './user.registration.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SocialLoginModule,
        LoginRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthenticationBaseComponent,
        LoginComponent,
        UserRegistrationComponent
    ],
    exports: [
        AuthenticationBaseComponent,
        LoginComponent,
        UserRegistrationComponent
    ],
    providers: [
        AuthenticationService,
        UserExistsValidator,
        EnableToLogin,
        isLoggedGuard,
        {
          provide: AuthServiceConfig,
          useFactory: getGoogleClientCredentials
        }
    ]
})
export class LoginModule {

}