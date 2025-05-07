<<<<<<< HEAD
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
