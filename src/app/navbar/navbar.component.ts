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
