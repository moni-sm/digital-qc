<<<<<<< HEAD
import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signature',
  standalone: true,
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SignatureComponent implements AfterViewInit {
  @ViewChild('nameCanvas') nameCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('signatureCanvas') signatureCanvas!: ElementRef<HTMLCanvasElement>;

  userName: string = '';
  signatureDataUrl: string | null = null;
  showSignaturePad: boolean = false;
  submittedData: any[] = [];

  private isDrawing: boolean = false;
  private currentCtx: CanvasRenderingContext2D | null = null;
  private lastX: number = 0;
  private lastY: number = 0;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupCanvases(), 0);  // Ensure canvas is available
    }
  }

  private setupCanvases() {
    if (!this.nameCanvas || !this.signatureCanvas) return;

    this.setupCanvas(this.nameCanvas.nativeElement);
    this.setupCanvas(this.signatureCanvas.nativeElement);
  }

  private setupCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#000000';
  }

  startDrawing(event: MouseEvent | TouchEvent, canvasType: 'name' | 'signature') {
    event.preventDefault();
    this.isDrawing = true;

    const canvas = canvasType === 'name'
      ? this.nameCanvas.nativeElement
      : this.signatureCanvas.nativeElement;

    this.currentCtx = canvas.getContext('2d');
    if (!this.currentCtx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = this.getClientX(event);
    const clientY = this.getClientY(event);

    this.lastX = clientX - rect.left;
    this.lastY = clientY - rect.top;

    this.currentCtx.beginPath();
    this.currentCtx.moveTo(this.lastX, this.lastY);
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.isDrawing || !this.currentCtx) return;
    event.preventDefault();

    const canvas = this.currentCtx.canvas;
    const rect = canvas.getBoundingClientRect();
    const clientX = this.getClientX(event);
    const clientY = this.getClientY(event);

    const currentX = clientX - rect.left;
    const currentY = clientY - rect.top;

    this.currentCtx.lineTo(currentX, currentY);
    this.currentCtx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }

  stopDrawing() {
    this.isDrawing = false;
    this.currentCtx = null;
  }

  private getClientX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  }

  private getClientY(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
  }

  clearCanvas() {
    const ctx = this.nameCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.nameCanvas.nativeElement.width, this.nameCanvas.nativeElement.height);
    }
  }

  openSignaturePad() {
    this.showSignaturePad = true;
  }

  closeSignaturePad() {
    this.showSignaturePad = false;
  }

  saveSignature() {
    this.signatureDataUrl = this.signatureCanvas.nativeElement.toDataURL();
    this.closeSignaturePad();
  }

  clearSignature() {
    const ctx = this.signatureCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.signatureCanvas.nativeElement.width, this.signatureCanvas.nativeElement.height);
    }
    this.signatureDataUrl = null;
  }

  saveData() {
    const nameImage = this.nameCanvas.nativeElement.toDataURL();

    this.submittedData.push({
      name: this.userName || 'Drawn Signature',
      signature: this.signatureDataUrl,
      nameImage: nameImage,
      timestamp: new Date()
    });

    this.userName = '';
    this.clearCanvas();
    this.clearSignature();
  }
}
=======
import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signature',
  standalone: true,
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SignatureComponent implements AfterViewInit {
  @ViewChild('nameCanvas') nameCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('signatureCanvas') signatureCanvas!: ElementRef<HTMLCanvasElement>;

  userName: string = '';
  signatureDataUrl: string | null = null;
  showSignaturePad: boolean = false;
  submittedData: any[] = [];

  private isDrawing: boolean = false;
  private currentCtx: CanvasRenderingContext2D | null = null;
  private lastX: number = 0;
  private lastY: number = 0;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupCanvases(), 0);  // Ensure canvas is available
    }
  }

  private setupCanvases() {
    if (!this.nameCanvas || !this.signatureCanvas) return;

    this.setupCanvas(this.nameCanvas.nativeElement);
    this.setupCanvas(this.signatureCanvas.nativeElement);
  }

  private setupCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#000000';
  }

  startDrawing(event: MouseEvent | TouchEvent, canvasType: 'name' | 'signature') {
    event.preventDefault();
    this.isDrawing = true;

    const canvas = canvasType === 'name'
      ? this.nameCanvas.nativeElement
      : this.signatureCanvas.nativeElement;

    this.currentCtx = canvas.getContext('2d');
    if (!this.currentCtx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = this.getClientX(event);
    const clientY = this.getClientY(event);

    this.lastX = clientX - rect.left;
    this.lastY = clientY - rect.top;

    this.currentCtx.beginPath();
    this.currentCtx.moveTo(this.lastX, this.lastY);
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.isDrawing || !this.currentCtx) return;
    event.preventDefault();

    const canvas = this.currentCtx.canvas;
    const rect = canvas.getBoundingClientRect();
    const clientX = this.getClientX(event);
    const clientY = this.getClientY(event);

    const currentX = clientX - rect.left;
    const currentY = clientY - rect.top;

    this.currentCtx.lineTo(currentX, currentY);
    this.currentCtx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }

  stopDrawing() {
    this.isDrawing = false;
    this.currentCtx = null;
  }

  private getClientX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  }

  private getClientY(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
  }

  clearCanvas() {
    const ctx = this.nameCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.nameCanvas.nativeElement.width, this.nameCanvas.nativeElement.height);
    }
  }

  openSignaturePad() {
    this.showSignaturePad = true;
  }

  closeSignaturePad() {
    this.showSignaturePad = false;
  }

  saveSignature() {
    this.signatureDataUrl = this.signatureCanvas.nativeElement.toDataURL();
    this.closeSignaturePad();
  }

  clearSignature() {
    const ctx = this.signatureCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.signatureCanvas.nativeElement.width, this.signatureCanvas.nativeElement.height);
    }
    this.signatureDataUrl = null;
  }

  saveData() {
    const nameImage = this.nameCanvas.nativeElement.toDataURL();

    this.submittedData.push({
      name: this.userName || 'Drawn Signature',
      signature: this.signatureDataUrl,
      nameImage: nameImage,
      timestamp: new Date()
    });

    this.userName = '';
    this.clearCanvas();
    this.clearSignature();
  }
}
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
