import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ezstore',
    templateUrl: './ezstore.component.html',
    styleUrl: './ezstore.component.scss',
    standalone: false,
})
export class EZStoreComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log('EZStoreComponent initialized');
    }

}