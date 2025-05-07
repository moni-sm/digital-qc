<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingParentComponent } from './testing-parent.component';

describe('TestingParentComponentTsComponent', () => {
  let component: TestingParentComponent;
  let fixture: ComponentFixture<TestingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingParentComponent } from './testing-parent.component';

describe('TestingParentComponentTsComponent', () => {
  let component: TestingParentComponent;
  let fixture: ComponentFixture<TestingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
