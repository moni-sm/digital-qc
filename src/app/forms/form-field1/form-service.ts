<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
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
<<<<<<< HEAD



=======
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
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
