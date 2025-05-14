// submitted.component.ts
import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../services/pdf.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submitted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {
  submissions: any[] = [];

  constructor(private readonly pdfService: PdfService) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('submittedForms');
    this.submissions = stored ? JSON.parse(stored) : [];
  }

  downloadAsPdf(index: number) {
    const element = document.getElementById(`submission-${index}`);
    if (element) {
      this.pdfService.generatePdf(element, `Inspection-Report-${index + 1}`);
    }
  }
}
