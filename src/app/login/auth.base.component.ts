import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'auth-base',
    templateUrl: './auth.base.component.html',
    styleUrls: ['./login.css']
})
export class AuthenticationBaseComponent implements OnInit {

    @ViewChild('openForm') openFormModal: ElementRef<HTMLInputElement>;

    public existentUserDetected: boolean = false;

    public isRegistration: boolean = true;

    ngOnInit(): void {
        this.openFormModal.nativeElement.click();
    }
}