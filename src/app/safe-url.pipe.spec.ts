import { Component } from '@angular/core';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-safe-url-pipe-test',
  templateUrl: './safe-url.pipe.spec.ts',
})
export class ExampleComponent {
  constructor(private readonly safeUrlPipe: SafeUrlPipe) {}

  getSanitizedUrl(url: string) {
    return this.safeUrlPipe.transform(url);
  }
}
