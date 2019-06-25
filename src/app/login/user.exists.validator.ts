import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

@Injectable()
export class UserExistsValidator {

    constructor(
        private authService:AuthenticationService 
    ) {}

    public checkNameIsTaken(): Function {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userInput => this.authService.checkNameIsTaken(userInput)))
                .pipe(map(response => !response? {unavailableUserName: true} : null))
                .pipe(first());
        };
    }

}