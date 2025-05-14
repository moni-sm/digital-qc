<<<<<<< HEAD

import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
=======
<<<<<<< HEAD
import { Component } from '@angular/core';
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from '../app/forms/form-field1/form-service';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
=======
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent, HttpClientModule,ReactiveFormsModule,CommonModule,RouterModule,],
  providers: [FormService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly ARIA_HIDDEN_VALUE = "false";
  constructor(private readonly renderer: Renderer2, private readonly el: ElementRef) {}
  title = 'digital-qc';

  ngAfterViewInit(): void {
    this.setAriaHiddenLock();
  }

  private setAriaHiddenLock(): void {
    const nativeElement = this.el.nativeElement as HTMLElement;
    this.renderer.setAttribute(
      nativeElement,
      "aria-hidden",
      this.ARIA_HIDDEN_VALUE
    );

    const originalSetAttribute = nativeElement.setAttribute.bind(nativeElement);

    nativeElement.setAttribute = (attr: string, value: string) => {
      if (attr === "aria-hidden") {
        value = this.ARIA_HIDDEN_VALUE;
      }
      originalSetAttribute(attr, value);
    };
  }
}
=======
  imports: [RouterOutlet, NavbarComponent, HttpClientModule],
  providers: [FormService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digital-qc';
}
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from '../app/forms/form-field1/form-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HttpClientModule],
  providers: [FormService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digital-qc';
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
