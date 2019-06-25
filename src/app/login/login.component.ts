import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserExistsValidator } from './user.exists.validator';
import { PlatformRuntimeDetectorService } from '../shared/platform.runtime.detector.service';
import { UserInfo } from './user.info';

@Component({
    selector: 'opinionated-login',
    templateUrl: './login.component.html'
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
              document.body.classList.remove('bg-dark');
              this.router.navigate(['products']);
          },
          error => {
              console.log(error.status);
              if (this.platformDetector.checkIfItRunningOnBrowser()) {
                  this.nameInput.nativeElement.focus();
              }
          }
        );
    }
  
    ngOnInit() {
      document.body.classList.add('bg-dark');
      this.authForm = this.authFormBuilder.group({
          name:['', [Validators.required], [this.userExistsValidator.checkNameIsTaken()]],
          password:['', Validators.required]
      });
    }
}