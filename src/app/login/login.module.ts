import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { AuthenticationBaseComponent } from './components/auth.base.component';
import { EnableToLogin } from './utilities/enable.to.login';
import { SharedModule } from '../shared/shared.module';
import { isLoggedGuard } from './utilities/is.logged.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserExistsValidator } from './validation/user.exists.validator';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { getGoogleClientCredentials } from './utilities/google.configuration';
import { LoginRoutingModule } from './login.routing.module';
import { UserRegistrationComponent } from './components/user.registration.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { BarCodeScanningComponent } from './components/barcode.scanning.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        SocialLoginModule,
        LoginRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthenticationBaseComponent,
        LoginComponent,
        UserRegistrationComponent,
        BarCodeScanningComponent
    ],
    exports: [
        AuthenticationBaseComponent,
        LoginComponent,
        UserRegistrationComponent,
        BarCodeScanningComponent
    ],
    providers: [
        AuthenticationService,
        UserExistsValidator,
        EnableToLogin,
        isLoggedGuard,
        {
          provide: AuthServiceConfig,
          useFactory: getGoogleClientCredentials
        },
        UserService
    ]
})
export class LoginModule {

}