<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

=======
<<<<<<< HEAD
import { Component } from '@angular/core';
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.scss'],
  imports:[CommonModule]
})
export class HomeComponent implements OnInit {

  trials: any[] = [];

  constructor(

    private readonly router: Router
  ) { }

  ngOnInit(): void {
    // Load the list of trials when the component initializes

  }

  viewTrial(trialTitle: string): void {
    this.router.navigate(['/form3', trialTitle], { queryParams: { readonly: true } });
  }

  startNewTrial(): void {
    this.router.navigate(['/form3']);
  }
}
=======
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
