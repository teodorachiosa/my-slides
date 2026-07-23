import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'web-a11y-for-everyone',
    pathMatch: 'full',
  },
  {
    path: 'web-a11y-for-everyone',
    loadComponent: () => import('./presentations/web-a11y-for-everyone/web-a11y-for-everyone').then((m) => m.WebA11yForEveryone),
    data: { title: 'presentations.webA11yForEveryone.title' },
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((m) => m.NotFound),
    data: { title: 'ui.notFoundTitle' },
  },
];
