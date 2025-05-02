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
