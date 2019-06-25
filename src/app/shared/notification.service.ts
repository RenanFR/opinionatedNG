import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Router, NavigationStart } from "@angular/router";
import { Notification, AlertType } from "./notification";

@Injectable({
    providedIn: "root"
})
export class NotificationService {

    private notifyHub: Subject<Notification> = new Subject<Notification>();
    private persistent: boolean;

    constructor(
        private router: Router
    ){
        router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (this.persistent) {
                    this.persistent = false;
                } else {
                    this.reset();
                }
            }
        })
    }

    public success(message: string, isPersistent: boolean = false) {
        console.log('Including success alert');
        console.log(message);
        this.notify(AlertType.SUCCESS, message, isPersistent);
    }

    public warning(message: string, isPersistent: boolean = false) {
        console.log('Including warning alert');
        console.log(message);
        this.notify(AlertType.WARNING, message, isPersistent);
    }
    
    public info(message: string, isPersistent: boolean = false) {
        console.log('Including information alert');
        console.log(message);
        this.notify(AlertType.INFO, message, isPersistent);
    }
    
    public error(message: string, isPersistent: boolean = false) {
        console.log('Including error alert');
        console.log(message);
        this.notify(AlertType.ERROR, message, isPersistent);
    }  
    
    public notify(alertType: AlertType, msg: string, isPersistent: boolean): void {
        this.persistent = isPersistent;
        this.notifyHub.next(new Notification(alertType, msg));
    }

    public reset(): void {
        this.notifyHub.next(null);
    }

    public notifications(): Observable<Notification> {
        return this.notifyHub.asObservable();
    }

}