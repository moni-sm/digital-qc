<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
