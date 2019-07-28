import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserExistsValidator } from './user.exists.validator';
import { NotificationService } from '../shared/notification.service';
import { NewUserModel } from './new.user.model';

@Component({
    templateUrl: './user.registration.component.html',
    styleUrls: ['./login.component.css']
})
export class UserRegistrationComponent implements OnInit {
    
    newUserForm: FormGroup;

    private userToRegister: NewUserModel = new NewUserModel();
    
    constructor(
        private newUserFormBuilder: FormBuilder,
        private userExistsValidator: UserExistsValidator,
        private notifier: NotificationService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.newUserForm = this.newUserFormBuilder.group({
            userMail: [ '', [ Validators.email ], [ this.userExistsValidator.checkNameIsTaken() ] ],
            userName: [ '', [] ],
            password: [ '', [] ],
            passwordConfirmation: [ '', [] ],
            useTwoFactorAuth: [ false, [] ],
            isSocialLogin: [ false, [] ],
        });
    }

    private onSave(): void {
        this.userToRegister = this.newUserForm.getRawValue() as NewUserModel;
        console.log(this.userToRegister);
    }
    
}