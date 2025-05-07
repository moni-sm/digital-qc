import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form1Component } from '../form-field1/form-field.component';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
  standalone: true,
  imports: [CommonModule, Form1Component, Form2Component],
})
export class Form3Component implements OnInit {
  form!: FormGroup;
  formField1 = false;
  showForm2 = false;
  form2DataList: any[] = [];
  form1Data: any = null;

  ngOnInit(): void {
    this.form = new FormGroup({
      inspdate: new FormControl('', Validators.required),
      Reps: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  handleForm1Submit(data: any): void {
    this.form1Data = data;
    this.formField1 = true;
  }

  closeForm1(): void {
    this.formField1 = true;
  }

  openForm2(): void {
    this.showForm2 = true;
  }

  handleForm2Submit(data: any): void {
    this.form2DataList.unshift(data);
    this.showForm2 = false;
  }

  closeForm2(): void {
    this.showForm2 = false;
  }

  deleteRow(index: number): void {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.form2DataList.splice(index, 1);
    }
  }
}
