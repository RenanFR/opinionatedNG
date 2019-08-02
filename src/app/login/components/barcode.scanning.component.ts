import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: '../templates/barcode.scanning.component.html'
})
export class BarCodeScanningComponent implements OnInit {

    private qrCode: string;
    
    constructor(
        private _DomSanitizationService: DomSanitizer,
        private activatedRoute: ActivatedRoute,
        private service: UserService
    ) { }

    ngOnInit(): void {

        this.qrCode = this.activatedRoute.snapshot.params.qrCode;

    }
    
}