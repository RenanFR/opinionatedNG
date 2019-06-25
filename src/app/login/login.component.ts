import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserExistsValidator } from './user.exists.validator';
import { PlatformRuntimeDetectorService } from '../shared/platform.runtime.detector.service';
import { UserInfo } from './user.info';
import { userPasswordIsDifferent } from './user.password.is.different.validation';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    bodyClass: boolean = true;

    authForm: FormGroup;
    
    @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  
    constructor(
      private authFormBuilder: FormBuilder,
      private authService: AuthenticationService,
      private platformDetector: PlatformRuntimeDetectorService,
      private userExistsValidator: UserExistsValidator,
      private router: Router
    ) { }
  
    public login(): void {
      let user: UserInfo = this.authForm.getRawValue() as UserInfo;
      this.authService
        .login(user.name, user.password)
        .subscribe(
          () => {
              this.router.navigate(['']);
          },
          error => {
              console.log(error.status);console.log(error);
              if (this.platformDetector.checkIfItRunningOnBrowser()) {
                  this.nameInput.nativeElement.focus();
              }
          }
        );
    }

    public doLoginWithGoogle(): void {
      this.authService.doLoginWithGoogle();
    }

    ngOnInit() {
      this.authForm = this.authFormBuilder.group({
          name:['', [Validators.required], [this.userExistsValidator.checkNameIsTaken()]],
          password:['', Validators.required]
      }, {
        validator: userPasswordIsDifferent
      });
    }
    
}