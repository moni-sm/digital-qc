<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3Component } from './form3.component';

describe('Form3Component', () => {
  let component: Form3Component;
  let fixture: ComponentFixture<Form3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3Component } from './form3.component';

describe('Form3Component', () => {
  let component: Form3Component;
  let fixture: ComponentFixture<Form3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
