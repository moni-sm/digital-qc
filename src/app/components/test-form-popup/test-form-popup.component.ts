import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from '../test-form/test-form.component';

@Component({
  selector: 'app-test-form-popup',
  standalone: true,
  imports: [CommonModule, TestFormComponent],
  templateUrl: './test-form-popup.component.html',
  styleUrls: ['./test-form-popup.component.scss'],
  styles: [`
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .popup-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 600px;
      max-height: 90vh;
      overflow-y: auto;
    }
  `]
})
export class TestFormPopupComponent {
  @Input() showPopup: boolean = false;
  @Input() testData: any = {};
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveTest = new EventEmitter<any>();

  onSave(testData: any) {
    this.saveTest.emit(testData);
    this.closePopup.emit();
  }

  onClose() {
    this.closePopup.emit();
  }
}
