import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

@Injectable()
export class UserExistsValidator {

    constructor(
        private authService: AuthenticationService 
    ) {}

    public checkEmailIsTaken(): Function {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userInput => this.authService.checkNameIsTaken(userInput)))
                .pipe(map(response => !response? {nonExistentUser: true} : null))
                .pipe(first());
        };
    }

    public checkEmailAvailability(): Function {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(emailToCheck => this.authService.checkNameIsTaken(emailToCheck)))
                .pipe(map(response => response? {emailAlreadyInUse: true} : null))
                .pipe(first());
        };
    }

}