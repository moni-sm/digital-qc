<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterParametersComponent } from './master-parameters.component';

describe('MasterParametersComponent', () => {
  let component: MasterParametersComponent;
  let fixture: ComponentFixture<MasterParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterParametersComponent } from './master-parameters.component';

describe('MasterParametersComponent', () => {
  let component: MasterParametersComponent;
  let fixture: ComponentFixture<MasterParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
