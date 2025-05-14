<<<<<<< HEAD
import { Component, EventEmitter, Output, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../../services/form-data.service';
import { Router } from '@angular/router';
=======
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule} from '@angular/forms';


>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5

@Component({
  selector: 'app-form-field1',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
})
<<<<<<< HEAD
export class Form1Component implements OnInit {
  @Output() form1Submit = new EventEmitter<any>();
  @Input() formData: any;

  form: FormGroup;
  formField1: boolean | undefined;
  showRecommendationForm = false;
  recommendationForm: FormGroup;
  selectedFile: File | null = null;
  recommendation = '';
  attachment = '';


  // Control visibility of the form independently

  constructor(
    private readonly fb: FormBuilder,
    private readonly formDataService: FormDataService,
    private readonly router: Router,
  ) {
=======
export class Form1Component {
  form: FormGroup;


  constructor(private readonly fb: FormBuilder) {
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
    this.form = this.fb.group({
      ship: [''],
      date: [''],
      occasion: [''],
      repsPresent: ['']
    });
<<<<<<< HEAD

    this.recommendationForm = this.fb.group({
      OverallStatus: [''],
      Recommendations: [''],
      Attachements: ['']
    });
  }

  ngOnInit() {
    if (this.formData) {
      this.createFormControls();
    }
  }

  createFormControls() {
    if (this.formData?.shipdetails?.controls) {
      this.formData.shipdetails.controls.forEach((control: any) => {
        this.form.addControl(control.name, this.fb.control(control.value ?? ''));
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // Convert file content to base64 and store in localStorage
        const base64File = reader.result as string;

        // Store the file in localStorage (in practice, it should be checked for file size limitations)
        localStorage.setItem('uploadedFile', JSON.stringify({
          name: this.selectedFile?.name,
          content: base64File
        }));

        // Update the form control value (attachment field)
        this.recommendationForm.patchValue({
          Attachements: this.selectedFile?.name
        });

        console.log('File saved in localStorage');
      };

      // Read the file as base64
      reader.readAsDataURL(this.selectedFile);
    }
  }


  onSubmit() {
    if (this.form.valid) {
      this.formDataService.updateOrAddForm1Data(this.form.value).subscribe(() => {
        this.router.navigate(['/form3']);
      });
    }
    console.log('Form saved!');
  }


  submitRecommendation() {
    const recommendationData = this.recommendationForm.value;

    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64File = reader.result as string;

        // Prepare and store full data (including base64 image)
        const savedData = {
          OverallStatus: recommendationData.OverallStatus,
          Recommendations: recommendationData.Recommendations,
          attachment: {
            name: this.selectedFile?.name,
            content: base64File,
          }
        };

        // Save to FormDataService (to be loaded in Form3)
        this.formDataService.setRecommendationData(savedData);

        // Save to localStorage or backend as needed
        this.formDataService.updateForm3Data(savedData).subscribe(() => {
          this.router.navigate(['/form3']);
        });

      };

      reader.readAsDataURL(this.selectedFile); // Triggers above reader.onload
    } else {
      // Save without attachment
      this.formDataService.updateForm3Data({
        OverallStatus: recommendationData.OverallStatus,
        Recommendations: recommendationData.Recommendations,
        attachment: null
      }).subscribe(() => {
        this.router.navigate(['/form3']);
      });
    }
  }

  // Method to open the form (modal)
  openForm() {
    this.formField1 = true;  // Open the modal
  }

  // Method to close the form (modal)
  closeForm() {
    this.formField1 = false;  // Close the modal without submitting
  }

  openRecommendationForm() {
    this.showRecommendationForm = true;

    // If data exists, prefill
    if (this.formData?.recommendations) {
      this.recommendationForm.patchValue(this.formData.recommendations);
    }
  }

  closeRecommendationForm() {
    this.showRecommendationForm = false;
  }
}
=======
  }


onSubmit() {
  if (this.form.valid) {
    this.formField1.emit(this.form.value);
  }
}

@Output() formField1 = new EventEmitter<any>();



}
=======
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
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
