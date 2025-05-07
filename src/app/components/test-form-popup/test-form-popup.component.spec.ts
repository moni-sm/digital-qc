<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormPopupComponent } from './test-form-popup.component';

describe('TestFormPopupComponent', () => {
  let component: TestFormPopupComponent;
  let fixture: ComponentFixture<TestFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormPopupComponent } from './test-form-popup.component';

describe('TestFormPopupComponent', () => {
  let component: TestFormPopupComponent;
  let fixture: ComponentFixture<TestFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
