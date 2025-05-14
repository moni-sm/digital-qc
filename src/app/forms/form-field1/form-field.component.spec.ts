<<<<<<< HEAD

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1Component } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: Form1Component;
  let fixture: ComponentFixture<Form1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form1Component);
=======
<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldComponent);
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
<<<<<<< HEAD
=======
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
