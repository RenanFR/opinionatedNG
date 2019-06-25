import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as jtw_decode from 'jwt-decode';
import { UserToken } from '../login/user.token';
import { UsefulConstants } from './useful.constants';

@Injectable({
    providedIn: "root"
})
export class TokenService {

    constructor(){
        if (this.isTokenSet()) {
            this.decodeNotifyUser();
        }
    }

    private userSubject = new BehaviorSubject<UserToken>(null);

    storeToken(token: string): void {
        window.localStorage.setItem('token', token);
        this.decodeNotifyUser();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    removeToken(): void {
        window.localStorage.removeItem('token');
    }

    isTokenSet(): boolean {
        return !!this.getToken();
    }

    getToken(): string {
        return window.localStorage.getItem('token');
    }

    decodeNotifyUser(): void {
        let token = this.getToken();
        let user = jtw_decode(token.replace(UsefulConstants.TOKEN_PREFIX, '')) as UserToken;
        this.userSubject.next(user);
    }      

}