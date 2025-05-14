
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
