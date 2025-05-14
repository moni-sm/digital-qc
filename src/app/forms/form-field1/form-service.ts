
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  getFormData(): import('rxjs').Observable<any> {
    return this.http.get('../form-data.json');
  }
}



