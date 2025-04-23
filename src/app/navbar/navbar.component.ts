import { Component } from '@angular/core';
import { SafeUrlPipe } from '../safe-url.pipe'; // Import SafeUrlPipe
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],  // Add CommonModule and SafeUrlPipe here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showPopup = false;  // Variable to control the popup visibility
  popupUrl = '';      // URL for the iframe

  openPopup(url: string) {
    this.popupUrl = url;  // Set the URL for the iframe
    this.showPopup = true; // Show the popup
  }

  closePopup() {
    this.showPopup = false; // Hide the popup
  }
}
