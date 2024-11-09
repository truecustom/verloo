import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'content', pathMatch: 'full'
  },
  {
    path: 'content', loadComponent: () => import('./content-page/content-home/content-home.component').then(mod => mod.ContentHomeComponent)
  },
  {
    path: 'learning', loadComponent: () => import('./learning-page/learning-home/learning-home.component').then(mod => mod.LearningHomeComponent)
  },
  {
    path: 'settings', loadComponent: () => import('./setting-page/setting-home/setting-home.component').then(mod => mod.SettingHomeComponent)
  },
  {
    path: 'login', loadComponent: () => import('./login-page/login-home/login-home.component').then(mod => mod.LoginHomeComponent)
  },
  {
    path: 'help', loadComponent: () => import('./help-page/help-home/help-home.component').then(mod => mod.HelpHomeComponent)
  }
];
