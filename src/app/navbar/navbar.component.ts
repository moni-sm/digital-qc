<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SafeUrlPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  dropdownOpen = false;
  showPopup = false;
  popupUrl: string = '';

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openPopup(url: string) {
    this.popupUrl = url;
    this.showPopup = true;
    this.dropdownOpen = false; // Close dropdown when popup opens
  }

  closePopup() {
    this.showPopup = false;
  }
}
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SafeUrlPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  dropdownOpen = false;
  showPopup = false;
  popupUrl: string = '';

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openPopup(url: string) {
    this.popupUrl = url;
    this.showPopup = true;
    this.dropdownOpen = false; // Close dropdown when popup opens
  }

  closePopup() {
    this.showPopup = false;
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
