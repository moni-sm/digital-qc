<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-master-parameters',
  standalone: true,
  templateUrl: './master-parameters.component.html',
  styleUrls: ['./master-parameters.component.scss'],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class MasterParametersComponent {
  @Input() parameters: any[] = [];
  @Output() parameterSelected = new EventEmitter<any>();

  selectParameter(parameter: any) {
    this.parameterSelected.emit(parameter);
  }

  // Add this if you need keyboard navigation
  handleKeyDown(event: KeyboardEvent, parameter: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectParameter(parameter);
    }
  }
}
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-master-parameters',
  standalone: true,
  templateUrl: './master-parameters.component.html',
  styleUrls: ['./master-parameters.component.scss'],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class MasterParametersComponent {
  @Input() parameters: any[] = [];
  @Output() parameterSelected = new EventEmitter<any>();

  selectParameter(parameter: any) {
    this.parameterSelected.emit(parameter);
  }

  // Add this if you need keyboard navigation
  handleKeyDown(event: KeyboardEvent, parameter: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectParameter(parameter);
    }
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
