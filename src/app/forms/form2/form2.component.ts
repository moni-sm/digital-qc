import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Form2Component {
  @Output() form2Submit = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  form2: FormGroup;

  inspectionTypes = ['A', 'B', 'C'];
  structureParts = ['Aa', 'Bb', 'Cc'];

  constructor(private fb: FormBuilder) {
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
      this.form2Submit.emit(this.form2.value);
      this.form2.reset(); // optional reset
    }
  }

  stopClickPropagation(event: Event) {
    event.stopPropagation();
  }

  closeModal() {
    this.close.emit();
  }
}
