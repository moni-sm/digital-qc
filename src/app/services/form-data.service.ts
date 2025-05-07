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
