import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'content', pathMatch: 'full'
  },
  {
    path: 'content', loadComponent: () => import('./content-page/content-list/content-list.component').then(mod => mod.ContentListComponent)
  }
];
