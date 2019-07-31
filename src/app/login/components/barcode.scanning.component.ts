import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: '../templates/barcode.scanning.component.html'
})
export class BarCodeScanningComponent implements OnInit {
    
    constructor(
        private service: UserService
    ) { }

    ngOnInit(): void {

    }
    
}