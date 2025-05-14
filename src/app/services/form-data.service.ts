<<<<<<< HEAD
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
=======
<<<<<<< HEAD
import { Injectable } from '@angular/core';
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5

@Injectable({ providedIn: 'root' })
export class FormDataService {

<<<<<<< HEAD
  private readonly storageKey = 'formData';
  private recommendationData: any = null;
  private readonly form2DataKey = 'form2Data';
  private readonly form1Key = 'form1Data';


  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private readonly platformId: Object) { }

  getFormConfig(): Observable<any> {
    return this.http.get<any>('assets/form-data.json');
  }

  // Method to set recommendation data (called when saving)
  setRecommendationData(data: any) {
    this.recommendationData = data;
    localStorage.setItem('recommendationData', JSON.stringify(data)); // Store in localStorage
  }

  // Method to get recommendation data (called when loading in Form3)
  getRecommendationData() {
    const data = localStorage.getItem('recommendationData');
    return data ? JSON.parse(data) : null;
  }

  updateForm1Data(data: any): Observable<any> {
    // Save the updated data to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(data));

    // Return observable with the updated data
    return of(data);
  }

  saveForm2DataList(data: any[]): Observable<void> {
  const current = JSON.parse(localStorage.getItem(this.storageKey) ?? '{}');
  current.form2DataList = data;
  localStorage.setItem(this.storageKey, JSON.stringify(current));
  return of();
}


  updateOrAddForm1Data(data: any): Observable<any> {
    const currentData = JSON.parse(localStorage.getItem('formData') ?? '{}');
    currentData.form1Data = data;
    localStorage.setItem('formData', JSON.stringify(currentData));
    return of(currentData);
  }

  setForm1Data(data: any): void {
    localStorage.setItem(this.form1Key, JSON.stringify(data));
  }

  getForm1Data(): any {
    const data = localStorage.getItem(this.form1Key);
    return data ? JSON.parse(data) : null;
  }

  // In FormDataService
  getForm2Data(): Observable<any[]> {
    const form2DataList = JSON.parse(localStorage.getItem(this.form2DataKey) ?? '[]');
    return of(form2DataList);  // Return observable with the form2 data
  }

  getFormData(): Observable<any> {
    const data = JSON.parse(localStorage.getItem(this.storageKey) ?? '{}');
    return of(data);  // Return Observable with the data from localStorage
  }

  setForm2Data(data: any[]): void {
    localStorage.setItem(this.form2DataKey, JSON.stringify(data));
  }

  addForm2Data(entry: any): Observable<void> {
    const current = JSON.parse(localStorage.getItem(this.storageKey) ?? '{}');

    // Ensure form2DataList exists and add the new entry
    const updatedList = current.form2DataList ? [...current.form2DataList, entry] : [entry];

    // Save updated data back to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify({ ...current, form2DataList: updatedList }));

    return of();  // returns Observable<void>
  }

  updateForm3Data(recommendationData: any): Observable<any> {
    const currentData = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    currentData.recommendationData = recommendationData;

    // Store the updated data in localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(currentData));

    return of(currentData);  // Return Observable with the updated data
  }

  deleteForm2Data(index: number): Observable<void> {
    const current = JSON.parse(localStorage.getItem(this.storageKey) ?? '{}');
    const currentList = current.form2DataList ?? [];

    if (index >= 0 && index < currentList.length) {
      // Remove item from the list
      currentList.splice(index, 1);
      current.form2DataList = currentList; // Update the list

      // Save updated list to localStorage
      localStorage.setItem(this.storageKey, JSON.stringify(current));
    }

    return of(); // Return Observable<void>
  }

  // New method for uploading attachments
  uploadAttachment(formData: FormData): Observable<any> {
    // Example API endpoint for file upload
    return this.http.post<any>('/api/upload', formData, {
      headers: new HttpHeaders({
        // You can add additional headers if needed
      })
    });
  }



}
=======
  private formfield1: any = null;


  setForm1Data(data: any) {
    this.formfield1 = data;
  }

  getForm1Data() {
    return this.formfield1;
  }

  hasForm1Data(): boolean {
    return this.formfield1 !== null;
  }
}
=======
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormDataService {

  private formfield1: any = null;


  setForm1Data(data: any) {
    this.formfield1 = data;
  }

  getForm1Data() {
    return this.formfield1;
  }

  hasForm1Data(): boolean {
    return this.formfield1 !== null;
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
