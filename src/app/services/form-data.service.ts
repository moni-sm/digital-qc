<<<<<<< HEAD
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
