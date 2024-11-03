import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'content', pathMatch: 'full'
  },
  {
    path: 'content', loadComponent: () => import('./content-page/content-home/content-home.component').then(mod => mod.ContentHomeComponent)
  }
];
