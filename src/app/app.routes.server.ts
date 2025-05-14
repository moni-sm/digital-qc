<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
// Define RenderMode locally as it is not exported from '@angular/ssr'
type RenderMode = 'Prerender' | 'Server';

interface ServerRoute {
  path: string;
  renderMode: RenderMode;
}

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: 'Prerender'
  }
];
<<<<<<< HEAD
=======
=======
// Define RenderMode locally as it is not exported from '@angular/ssr'
type RenderMode = 'Prerender' | 'Server';

interface ServerRoute {
  path: string;
  renderMode: RenderMode;
}

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: 'Prerender'
  }
];
>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
