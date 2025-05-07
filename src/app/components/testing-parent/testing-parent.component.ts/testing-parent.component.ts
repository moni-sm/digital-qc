<<<<<<< HEAD
import { Component } from '@angular/core';
import { TestDataService } from '../../../services/test-data.service';
import { CommonModule } from '@angular/common';
import { TestFormPopupComponent } from '../../test-form-popup/test-form-popup.component';

@Component({
  selector: 'app-testing-parent',
  standalone: true,
  imports: [CommonModule, TestFormPopupComponent],
  templateUrl: './testing-parent.component.html',
  styleUrls: ['./testing-parent.component.scss']
})
export class TestingParentComponent {
  masterParameters: any[] = [];
  selectedParameter: any = null;
  showPopup = false;

  constructor(private readonly testDataService: TestDataService) {
    this.masterParameters = this.testDataService.getMasterParameters();
  }

  openParameterPopup(parameter: any): void {
    this.selectedParameter = parameter ?? { name: '', Units: '', SpecifiedValue: '' };
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedParameter = null;
  }

  handleKeyDown(event: KeyboardEvent, parameter: any): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openParameterPopup(parameter);
    }
  }

  handleSave(testData: any): void {
    if (this.selectedParameter?.name) {
      // Update existing parameter
      const index = this.masterParameters.findIndex(p => p.name === this.selectedParameter.name);
      if (index !== -1) {
        this.testDataService.updateTest(index, testData);
      }
    } else {
      // Add new parameter
      this.testDataService.addTest(testData);
    }
    this.closePopup();
  }
}
=======
import { Component } from '@angular/core';
import { TestDataService } from '../../../services/test-data.service';
import { CommonModule } from '@angular/common';
import { TestFormPopupComponent } from '../../test-form-popup/test-form-popup.component';

@Component({
  selector: 'app-testing-parent',
  standalone: true,
  imports: [CommonModule, TestFormPopupComponent],
  templateUrl: './testing-parent.component.html',
  styleUrls: ['./testing-parent.component.scss']
})
export class TestingParentComponent {
  masterParameters: any[] = [];
  selectedParameter: any = null;
  showPopup = false;

  constructor(private readonly testDataService: TestDataService) {
    this.masterParameters = this.testDataService.getMasterParameters();
  }

  openParameterPopup(parameter: any): void {
    this.selectedParameter = parameter ?? { name: '', Units: '', SpecifiedValue: '' };
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedParameter = null;
  }

  handleKeyDown(event: KeyboardEvent, parameter: any): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openParameterPopup(parameter);
    }
  }

  handleSave(testData: any): void {
    if (this.selectedParameter?.name) {
      // Update existing parameter
      const index = this.masterParameters.findIndex(p => p.name === this.selectedParameter.name);
      if (index !== -1) {
        this.testDataService.updateTest(index, testData);
      }
    } else {
      // Add new parameter
      this.testDataService.addTest(testData);
    }
    this.closePopup();
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
