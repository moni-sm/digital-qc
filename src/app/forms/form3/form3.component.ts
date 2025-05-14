import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component, ElementRef, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Form1Component } from '../form-field1/form-field.component';
import { Form2Component } from '../form2/form2.component';
import { FormDataService } from '../../services/form-data.service';
import { MatDialogModule } from '@angular/material/dialog';

interface RecommendationData {
  OverallStatus: string;
  Recommendations?: string;
  attachment?: { name: string; content: string };
}

=======
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form1Component } from '../form-field1/form-field.component';
import { Form2Component } from '../form2/form2.component';
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [MatDialogModule, CommonModule, Form1Component, ReactiveFormsModule],

})
export class Form3Component implements OnInit {
  @Input() formData: any;
  @ViewChild('closeButton') closeButton: ElementRef | undefined;

  form2Entries: any[] = [];
  overallStatus: string = '';
  recommendations: string = '';
  attachments: any[] = [];
  formField1 = false;
  form1Data: any = {};
  form2DataList: any[] = [];
  recommendationData: RecommendationData = { OverallStatus: '' };
  editingIndex: number | null = null;
  form: FormGroup = new FormGroup({});
  recommendationForm!: FormGroup;
  selectedFile: File | null = null;
  showRecommendationForm = false;
  entries: any[] = [];
  loading = true;

  constructor(
    private readonly formDataService: FormDataService,
    private readonly dialog: MatDialog,
    private readonly cdr: ChangeDetectorRef,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.loadFormData(); // Single method for loading data

    // You can load data from localStorage or wherever necessary
    const savedForm1 = localStorage.getItem('form1Data');
    const savedForm2 = localStorage.getItem('form2Entries');
    const savedStatus = localStorage.getItem('overallStatus');
    const savedRec = localStorage.getItem('recommendations');
    const savedFiles = localStorage.getItem('attachments');

    if (savedForm1) this.form1Data = JSON.parse(savedForm1);
    if (savedForm2) this.form2Entries = JSON.parse(savedForm2);
    if (savedStatus) this.overallStatus = savedStatus;
    if (savedRec) this.recommendations = savedRec;
    if (savedFiles) this.attachments = JSON.parse(savedFiles);
  }

  initializeForm(): void {
    this.form = new FormGroup({
      ship: new FormControl('', Validators.required),
      inspdate: new FormControl('', Validators.required),
      occasion: new FormControl('', Validators.required),
      Reps: new FormControl('', Validators.required),
    });

    this.recommendationForm = this.fb.group({
      OverallStatus: [''],
      Recommendations: [''],
      attachment: [''],
    });
  }

  async loadFormData(): Promise<void> {
    try {
      const formData = await this.formDataService.getFormData().toPromise();
      this.formData = formData;
      this.form1Data = formData?.form1Data ?? {};
      this.form2DataList = formData?.form2DataList ?? [];
      this.recommendationData = formData?.recommendationData ?? { OverallStatus: '', attachment: '' };

      // Set recommendation form values
      this.recommendationForm.patchValue({
        OverallStatus: this.recommendationData?.OverallStatus || '',
        Recommendations: this.recommendationData?.Recommendations || '',
        attachment: this.recommendationData?.attachment || '',
      });

      this.entries = formData?.entries ?? []; // Assuming entries are part of formData
      this.loading = false;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to load form data', error);
      this.loading = false;
    }
  }

  getDisplayData() {
    return {
      ship: this.form1Data?.ship ?? '—',
      date: this.form1Data?.date ?? '—',
      occasion: this.form1Data?.occasion ?? '—',
      repsPresent: this.form1Data?.repsPresent ?? '—',
    };
  }

  openForm1(): void {
    this.formField1 = true;
    setTimeout(() => this.closeButton?.nativeElement.focus(), 0);
  }

  closeForm1(): void {
    this.formField1 = false;
  }

  openForm2(editData: any = null, index: number | null = null): void {
    const dialogRef = this.dialog.open(Form2Component, {
      width: '400px',
      panelClass: 'center-dialog',
      data: editData, // Pass data if editing
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (index !== null) {
          this.form2DataList[index] = result;
        } else {
          this.form2DataList = [...this.form2DataList, result];
        }

        // Optional: update entries[] or display array if used
        this.entries = [...this.form2DataList];

        this.cdr.detectChanges();
        this.formDataService.saveForm2DataList(this.form2DataList).subscribe(() => {
          this.loadFormData();
        });
        // Save full list
      }
    });
  }

  editRow(index: number): void {
    const editData = this.form2DataList[index];
    this.openForm2(editData, index);
  }

  openRecommendationForm(): void {
    this.showRecommendationForm = true;
  }

  closeRecommendationForm(): void {
    this.showRecommendationForm = false;
  }

  getRecommendation() {
    return {
      Recommendations: this.recommendationData?.Recommendations || '—',
      attachment: this.recommendationData?.attachment?.name || 'No file',
    };
  }

  handleForm1Submit(data: any): void {
    if (data?.isStatusRow) {
      this.form2DataList = [...this.form2DataList, data];
      this.saveForm2Data(data); // Save status row immediately
      return;
    }

    this.formDataService.updateOrAddForm1Data(data).subscribe(
      (updatedData) => {
        this.form1Data = updatedData.form1Data;
        this.formField1 = false;
      },
      (err) => {
        console.error('Form1 submission failed:', err);
      }
    );
  }

  deleteRow(index: number): void {
    if (Array.isArray(this.form2DataList)) {
      this.form2DataList = this.form2DataList.filter((_, i) => i !== index);

      // Save the updated list permanently
      const updatedData = {
        ...this.formData,
        form2DataList: this.form2DataList,
      };

      this.formDataService.updateForm1Data(updatedData).subscribe(
        () => {
          console.log('Row deleted and data updated.');
          this.loadFormData(); // Reload to reflect the change
        },
        (err) => {
          console.error('Error deleting row:', err);
        }
      );
    }
  }

  saveForm2Data(data?: any): void {
    const dataToSave = data ?? this.form2DataList;

    this.formDataService.addForm2Data(dataToSave).subscribe(
      async () => {
        console.log('Form2 data saved.');
        // Reload the form2DataList to reflect the newly added data
        await this.loadFormData(); // Reload form data after saving
      },
      (err) => {
        console.error('Form2 save failed:', err);
      }
    );
  }

  // Handle file input for attachment
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.recommendationForm.patchValue({
          attachment: {
            name: file.name,
            content: reader.result as string
          }
        });
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmitForm3() {
    // Prepare the complete submission data
    const form3Submission = {
      form1Data: {
        ship: this.form1Data?.ship,
        inspdate: this.form1Data?.inspdate,
        occasion: this.form1Data?.occasion,
        repsPresent: this.form1Data?.repsPresent
      },
      form2Entries: this.form2DataList.map(entry => ({
        title: entry.title,
        checks: entry.checks,
        observation: entry.observation,
        remarks: entry.remarks
      })),
      overallStatus: this.recommendationData.OverallStatus,
      recommendations: this.recommendationData.Recommendations,
      attachments: this.recommendationData.attachment ? [{
        name: this.recommendationData.attachment.name,
        content: this.recommendationData.attachment.content
      }] : [],
      submittedAt: new Date().toISOString()
    };

    // Get existing submissions or initialize empty array
    const existingSubmissions = JSON.parse(localStorage.getItem('submittedForms') || '[]');

    // Add new submission
    existingSubmissions.push(form3Submission);

    // Save back to localStorage
    localStorage.setItem('submittedForms', JSON.stringify(existingSubmissions));

    // Optional: You might want to navigate to the submitted page
    // this.router.navigate(['/submitted']);

    alert('Form submitted successfully!');
    this.clearAllData();
  }



  clearAllData(): void {
    // Reset local storage
    localStorage.removeItem('formData');
    localStorage.removeItem('recommendationData');
    localStorage.removeItem('form1Data');
    localStorage.removeItem('form2Data');

    // Clear component state
    this.form1Data = {};
    this.form2DataList = [];
    this.recommendationData = { OverallStatus: '' };
    this.recommendationForm.reset();
    this.entries = [];

    this.cdr.detectChanges();
  }

=======
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
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
}
