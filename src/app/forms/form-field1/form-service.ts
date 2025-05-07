<<<<<<< HEAD
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
=======
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
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
