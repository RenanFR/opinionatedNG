import { Component, Input, ChangeDetectorRef, NgZone, OnDestroy } from "@angular/core";
import { Notification, AlertType } from "./notification";
import { NotificationService } from "./notification.service";

@Component({
    selector: 'opinionated-notification',
    templateUrl: './notification.component.html'
})
export class NotificationComponent {

    @Input() timeToEase: number = 30000;

    public notifications: Notification[] = [];
    public testMessage: string = 'Default text';

    constructor(
        private notificationService: NotificationService,
        private zone: NgZone,
        private viewUpdate: ChangeDetectorRef
    ){
        this.notificationService
            .notifications()
            .subscribe((alert) => {
                this.testMessage = 'Service updated the text';
                this.viewUpdate.markForCheck();
                // this.zone.run(() => {
                //     this.testMessage = 'Text updated manually';
                // });
                console.log(alert);
                if (!alert) {
                    console.log('Null alert arrived to reset notifications');
                    this.notifications = [];
                    return;
                }
                console.log('Including new alert');
                this.notifications.push(alert);
                console.log(this.notifications);
                console.log('Number of notifications ' + (this.notifications.length));
                setTimeout(() => this.cancelAlert(alert), this.timeToEase);
            });
    }

    private cancelAlert(notification: Notification): void {
        console.log('Current number of notifications ' + (this.notifications.length));
        console.log(notification);
        this.notifications.filter((not) => not != notification);
        console.log(this.notifications);
        console.log('Removing alerts, notification is now with length ' + this.notifications.length);
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

    public updateView(): void {
        this.testMessage = 'Text updated by function';
    }

}