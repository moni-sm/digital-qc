import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Form1Component } from "../form-field1/form-field.component";


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [ReactiveFormsModule, CommonModule, Form1Component],
})
export class Form2Component implements OnDestroy {
handleForm1Submit($event: Event) {
throw new Error('Method not implemented.');
}
  @Output() form2Submit = new EventEmitter<any>();
  form2: FormGroup;

  inspectionTypes = ['A', 'B', 'C'];
  structureParts = ['Aa', 'Bb', 'Cc'];
  formField1: boolean | undefined;


  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<Form2Component>

  ) {
    this.form2 = this.fb.group({
      title: ['', Validators.required],
      checks: ['', Validators.required],
      inspdate: ['', Validators.required],
      Reps: ['', Validators.required],
      observation: [''],
      remarks: ['']
    });

  }

  onSubmit(): void {
    if (this.form2.valid) {
      this.form2Submit.emit(this.form2.value); // Emit the form data to Form3
      this.dialogRef.close();  // Close the dialog
    }
  }

  ngOnDestroy(): void {
    this.form2.reset(); // Reset form when component is destroyed
  }

  closeModal() {
    this.formField1 = true; // hides the modal
  }

  stopClickPropagation(event: Event) {
    event.stopPropagation(); // prevents modal from closing when clicking inside
  }

}
