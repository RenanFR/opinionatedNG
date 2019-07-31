import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'auth-base',
    templateUrl: '../templates/auth.base.component.html',
    styleUrls: ['../styles/login.css']
})
export class AuthenticationBaseComponent implements OnInit {

    @ViewChild('openForm') openFormModal: ElementRef<HTMLInputElement>;

    public existentUserDetected: boolean = false;

    public isRegistration: boolean = true;

    ngOnInit(): void {
        this.openFormModal.nativeElement.click();
    }
}