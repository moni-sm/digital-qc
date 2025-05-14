import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
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
