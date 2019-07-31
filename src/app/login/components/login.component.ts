import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { UserExistsValidator } from '../validation/user.exists.validator';
import { UserInfo } from '../models/user.info';
import { userPasswordIsDifferent } from '../validation/user.password.is.different.validation';
import { PlatformRuntimeDetectorService } from 'src/app/shared/services/platform.runtime.detector.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
    templateUrl: '../templates/login.component.html',
    styleUrls: ['../styles/login.component.css']
})
export class LoginComponent implements OnInit {

    authForm: FormGroup;
    
    @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  
    constructor(
      private authFormBuilder: FormBuilder,
      private authService: AuthenticationService,
      private platformDetector: PlatformRuntimeDetectorService,
      private userExistsValidator: UserExistsValidator,
      private notifier: NotificationService
    ) { }
  
    private login(): void {
      let user: UserInfo = this.authForm.getRawValue() as UserInfo;
      this.authService
        .login(user.email, user.password)
        .subscribe(
          () => {
            this.notifier.info('User authenticated successfully', true);
            window.location.href = '/categories?redirectAfterAuth=true';
          },
          error => {
            console.log(error.status);
            if (this.platformDetector.checkIfItRunningOnBrowser()) {
                this.nameInput.nativeElement.focus();
            }
          }
        );
    }

    private doLoginWithGoogle(): void {
      this.authService.doLoginWithGoogle();
    }

    ngOnInit(): void {
      this.authForm = this.authFormBuilder.group({
          email: [ '', [ Validators.required ], [ this.userExistsValidator.checkEmailIsTaken() ] ],
          password: [ '', Validators.required ]
      }, {
        validator: userPasswordIsDifferent
      });
    }
    
}