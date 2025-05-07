import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Form2Component } from '../form2/form2.component';
import { Form1Component } from '../form-field1/form-field.component';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
  standalone: true,
  imports: [CommonModule, Form1Component],
})
export class Form3Component implements OnInit {
  form!: FormGroup;
  formField1 = false;
  form2DataList: any[] = [];
  form1Data: any = null;

  constructor(private readonly dialog: MatDialog) {}

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

  openForm2(): void {
    const dialogRef = this.dialog.open(Form2Component, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.form2DataList.unshift(result); // Adds new entry to the top of the table
      }
    });
  }

  deleteRow(index: number): void {
    this.form2DataList.splice(index, 1);
  }


}
