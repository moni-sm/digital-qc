
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from '../app/forms/form-field1/form-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
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
