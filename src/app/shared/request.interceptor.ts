import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

    constructor(
        private tokenService:TokenService 
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.tokenService.isTokenSet()) {
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        return next.handle(req);
    }

}