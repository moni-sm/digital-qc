import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-form-field1',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Form1Component {
  form: FormGroup;


  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      ship: [''],
      date: [''],
      occasion: [''],
      repsPresent: ['']
    });
  }


onSubmit() {
  if (this.form.valid) {
    this.formField1.emit(this.form.value);
  }
}

@Output() formField1 = new EventEmitter<any>();



}
