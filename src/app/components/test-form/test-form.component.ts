<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  @Input() testData: any = {};
  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  testForm: FormGroup;
  units = ["KOhm", "M-ohm", "ohm", "Hrs", "Deg C", "dBM", "RPM", "Amps", "zz/c3", "Hz", "Volts"];
  remarks = ["Satisfactory", "Unsatisfactory"];

  constructor(private readonly fb: FormBuilder) {
    this.testForm = this.fb.group({
      name: ['', Validators.required],
      Units: [''],
      SpecifiedValue: [''],
      MeasuredValue: [0.0],
      Remark: ['']
    });
  }

  ngOnChanges() {
    if (this.testData) {
      this.testForm.patchValue(this.testData);
    }
  }

  onSubmit() {
    if (this.testForm.valid) {
      this.formSubmit.emit(this.testForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  @Input() testData: any = {};
  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  testForm: FormGroup;
  units = ["KOhm", "M-ohm", "ohm", "Hrs", "Deg C", "dBM", "RPM", "Amps", "zz/c3", "Hz", "Volts"];
  remarks = ["Satisfactory", "Unsatisfactory"];

  constructor(private readonly fb: FormBuilder) {
    this.testForm = this.fb.group({
      name: ['', Validators.required],
      Units: [''],
      SpecifiedValue: [''],
      MeasuredValue: [0.0],
      Remark: ['']
    });
  }

  ngOnChanges() {
    if (this.testData) {
      this.testForm.patchValue(this.testData);
    }
  }

  onSubmit() {
    if (this.testForm.valid) {
      this.formSubmit.emit(this.testForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
