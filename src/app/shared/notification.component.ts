import { Component, Input } from "@angular/core";
import { Notification, AlertType } from "./notification";
import { NotificationService } from "./notification.service";

@Component({
    selector: 'opinionated-notification',
    templateUrl: './notification.component.html'
})
export class NotificationComponent {

    @Input() timeToEase: number = 30000;

    public notifications: Notification[] = [];

    constructor(
        private notificationService: NotificationService
    ){
        this.notificationService
            .notifications()
            .subscribe((alert) => {
                if (!alert) {
                    this.notifications = [];
                    return;
                }
                console.log('Including new alert');
                this.notifications.push(alert);
                console.log('Number of notifications ' + (this.notifications.length));
                setTimeout(() => this.cancelAlert(alert), this.timeToEase);
            });
    }

    private cancelAlert(notification: Notification): void {
        console.log('Current number of notifications ' + (this.notifications.length));
        this.notifications.filter((not) => not != notification);
        console.log('Removing alerts');
    }

    public getNotificationStyle(alert: Notification): string {
        if (!alert) return "";
        switch(alert.alertType) {
            case AlertType.ERROR:
                return "alert alert-danger";
            case AlertType.INFO:
                return "alert alert-info";
            case AlertType.SUCCESS:
                return "alert alert-success";
            case AlertType.WARNING:
                return "alert alert-warning";

        }
    }

}