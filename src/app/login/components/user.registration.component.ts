import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NewUserModel } from '../models/new.user.model';
import { UserExistsValidator } from '../validation/user.exists.validator';
import { UserService } from '../services/user.service';
import { verifyPasswordConfirmationMatching } from '../validation/password.and.confirmation.dont.match';

@Component({
    templateUrl: '../templates/user.registration.component.html',
    styleUrls: ['../styles/login.component.css']
})
export class UserRegistrationComponent implements OnInit {
    
    newUserForm: FormGroup;

    private userToRegister: NewUserModel = new NewUserModel();
    
    constructor(
        private newUserFormBuilder: FormBuilder,
        private userExistsValidator: UserExistsValidator,
        private service: UserService
    ) { }

    ngOnInit(): void {
        this.newUserForm = this.newUserFormBuilder.group({
            userMail: [ '', [ Validators.required ], [ this.userExistsValidator.checkEmailAvailability() ] ],
            userName: [ '', [] ],
            password: [ '', [] ],
            passwordConfirmation: [ '', [] ],
            useTwoFactorAuth: [ false, [] ],
            isSocialLogin: [ false, [] ],
        }, {
            validator: verifyPasswordConfirmationMatching
        });
    }

    private onSave(): void {
        this.userToRegister = this.newUserForm.getRawValue() as NewUserModel;
        this.service.signUpUser(this.userToRegister).subscribe((responseText) => {
            
        },
        (shitHappened) => {
            
        });
    }
    
}