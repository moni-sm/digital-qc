import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Component imports
import { MasterParametersComponent } from '../app/components/master-parameters/master-parameters.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TestFormPopupComponent } from '../app/components/test-form-popup/test-form-popup.component';
import { TestingParentComponent } from '../app/components/testing-parent/testing-parent.component.ts/testing-parent.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestingParentComponent,
    MasterParametersComponent,
    TestFormComponent,
    TestFormPopupComponent
  ],
  exports: [
    TestingParentComponent
  ]
})
export class TestingModule { }
