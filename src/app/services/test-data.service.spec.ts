<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  private readonly masterParameters = [
    {
      "name": "Voltage"
  },
  {
      "name": "Frequency"
  }
  ,
  {
      "name": "IR Field/Pole"
  }
  ,
  {
      "name": "IR Stator and Rotor"
  }
  ,
  {
      "name": "Ohmic Value - Before"
  }
  ,
  {
      "name": "Ohmic Value - After"
  },
  {
      "name": "Bearing No. DE"
  },
  {
      "name": "Bearing No. NDE"
  },
  {
      "name": "Starting current if AC motor"
  },
  {
      "name": "Load current"
  },
  {
      "name": "No load current"
  },
  {
      "name": "RPM"
  },
  {
      "name": "SPM - DE"
  },
  {
      "name": "SPM - NDE"
  },
  {
      "name": "Temp - DE"
  },
  {
      "name": "Temp - Body"
  },
  {
      "name": "Temp - NDE"
  },
  {
      "name": "Vibration A"
  },
  {
      "name": "Vibration H"
  },
  {
      "name": "Vibration V"
  },
  {
      "name": "Motor trial duration"
  },
  {
      "name": "Motor body painting"
  }

  ];

  private readonly testsSubject = new BehaviorSubject<any[]>([]);
  tests$ = this.testsSubject.asObservable();

  getMasterParameters() {
    return [...this.masterParameters];
  }

  addTest(test: any) {
    const currentTests = this.testsSubject.value;
    this.testsSubject.next([...currentTests, test]);
  }

  updateTest(index: number, test: any) {
    const currentTests = this.testsSubject.value;
    currentTests[index] = test;
    this.testsSubject.next([...currentTests]);
  }

  deleteTest(index: number) {
    const currentTests = this.testsSubject.value;
    currentTests.splice(index, 1);
    this.testsSubject.next([...currentTests]);
  }
}
<<<<<<< HEAD
=======
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  private readonly masterParameters = [
    {
      "name": "Voltage"
  },
  {
      "name": "Frequency"
  }
  ,
  {
      "name": "IR Field/Pole"
  }
  ,
  {
      "name": "IR Stator and Rotor"
  }
  ,
  {
      "name": "Ohmic Value - Before"
  }
  ,
  {
      "name": "Ohmic Value - After"
  },
  {
      "name": "Bearing No. DE"
  },
  {
      "name": "Bearing No. NDE"
  },
  {
      "name": "Starting current if AC motor"
  },
  {
      "name": "Load current"
  },
  {
      "name": "No load current"
  },
  {
      "name": "RPM"
  },
  {
      "name": "SPM - DE"
  },
  {
      "name": "SPM - NDE"
  },
  {
      "name": "Temp - DE"
  },
  {
      "name": "Temp - Body"
  },
  {
      "name": "Temp - NDE"
  },
  {
      "name": "Vibration A"
  },
  {
      "name": "Vibration H"
  },
  {
      "name": "Vibration V"
  },
  {
      "name": "Motor trial duration"
  },
  {
      "name": "Motor body painting"
  }

  ];

  private readonly testsSubject = new BehaviorSubject<any[]>([]);
  tests$ = this.testsSubject.asObservable();

  getMasterParameters() {
    return [...this.masterParameters];
  }

  addTest(test: any) {
    const currentTests = this.testsSubject.value;
    this.testsSubject.next([...currentTests, test]);
  }

  updateTest(index: number, test: any) {
    const currentTests = this.testsSubject.value;
    currentTests[index] = test;
    this.testsSubject.next([...currentTests]);
  }

  deleteTest(index: number) {
    const currentTests = this.testsSubject.value;
    currentTests.splice(index, 1);
    this.testsSubject.next([...currentTests]);
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
