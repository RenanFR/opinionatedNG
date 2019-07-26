import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserExistsValidator } from './user.exists.validator';
import { PlatformRuntimeDetectorService } from '../shared/platform.runtime.detector.service';
import { userPasswordIsDifferent } from './user.password.is.different.validation';
import { UserInfo } from './user.info';
import { NotificationService } from '../shared/notification.service';
import { NewUserModel } from './new.user.model';

@Component({
    templateUrl: './user.registration.component.html',
    styleUrls: ['./login.component.css']
})
export class UserRegistrationComponent implements OnInit {
    
    private newUserForm: FormGroup;

    private userToRegister: NewUserModel = new NewUserModel();
    
    constructor(
        private newUserFormBuilder: FormBuilder,
        private userExistsValidator: UserExistsValidator,
        private notifier: NotificationService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.newUserForm = this.newUserFormBuilder.group({
            userMail: ['', []],
            userName: ['', []],
            password: ['', []],
            passwordConfirmation: ['', []],
            useTwoFactorAuth: [false, []],
            isSocialLogin: [false, []],
        });
    }

    private onSave(): void {
        
    }
    
}