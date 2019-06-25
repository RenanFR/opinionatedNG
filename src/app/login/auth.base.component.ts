import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: 'auth-base',
    templateUrl: './auth.base.component.html',
    styleUrls: ['./login.css']
})
export class AuthenticationBaseComponent implements OnInit {

    @ViewChild('openForm') openFormModal: ElementRef<HTMLInputElement>;

    ngOnInit(): void {
        this.openFormModal.nativeElement.click();
    }
}