import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-form2',
  standalone: true,
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Form2Component implements OnInit {
  inspectionTypes: string[] = [];
  structureParts: string[] = [];
  form2!: FormGroup;

  constructor(
   private readonly fb: FormBuilder,
   private readonly dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<Form2Component>,
    private readonly formDataService: FormDataService
  ) { }

  ngOnInit(): void {
    this.formDataService.getFormConfig().subscribe(config => {
      const hangarControls = config?.hangarchecks?.controls;

      if (!hangarControls || !Array.isArray(hangarControls)) {
        console.error('hangarchecks.controls not found in JSON');
        return;
      }

      const titleControl = hangarControls.find((c: any) => c.name === 'title');
      const checksControl = hangarControls.find((c: any) => c.name === 'checks');

      this.inspectionTypes = titleControl?.options?.map((opt: any) => opt.value) ?? [];
      this.structureParts = checksControl?.options?.map((opt: any) => opt.value) ?? [];

      // Initialize the form with default values (first option or empty)
      this.form2 = this.fb.group({
        title: ['', Validators.required],
        checks: ['', Validators.required],
        observation: [''],
        remarks: ['']
      });

      console.log('Inspection Types:', this.inspectionTypes);
      console.log('Structure Parts:', this.structureParts);
    });
  }

  onSubmit(): void {

      const values = this.form2.value;
      const hasSomeValue = Object.values(values).some(
        v => typeof v === 'string' ? v.trim() !== '' : !!v
      );

    console.log('Form Validity:', this.form2.valid);  // Log the form validity
    console.log('Form Data:', this.form2.value);     // Log the form values

    if (this.form2.valid) {
      this.dialogRef.close(this.form2.value);  // Send data to Form3
    } else {
      console.log('Form is invalid!', this.form2.errors);
      this.form2.markAllAsTouched();  // Mark all controls as touched to show validation messages
    }
    if (!hasSomeValue) {
      alert('Please fill at least one field.');
      return;
    }

    this.dialogRef.close(values);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
