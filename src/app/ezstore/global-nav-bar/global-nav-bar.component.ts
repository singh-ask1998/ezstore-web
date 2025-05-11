import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ezstore-navbar',
    templateUrl: './global-nav-bar.component.html',
    styleUrl: './global-nav-bar.component.scss',
    standalone: false,
})
export class GlobalNavBarComponent implements OnInit {

  searchQuery = '';
  customBorderRadius = '5px';
  customBg = '#fff';

  onSearchChange() {
    console.log('Search changed:', this.searchQuery);
  }

  onSearchClick() {
    console.log('Search clicked with:', this.searchQuery);
  }

    constructor() { }

    ngOnInit(): void {
        console.log('GlobalNavBarComponent initialized');
    }

}