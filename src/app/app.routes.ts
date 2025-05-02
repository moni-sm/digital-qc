import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // Redirect blank to home
  { path: '', redirectTo: 'dynamic-forms/components/dynamic-field', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'explore', loadComponent: () => import('./explore/explore.component').then(m => m.ExploreComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: 'signature', loadComponent: () => import('./signature/signature.component').then(m => m.SignatureComponent) },
  { path: 'forms', loadComponent: () => import('../app/components/testing-parent/testing-parent.component.ts/testing-parent.component').then(m => m.TestingParentComponent) },


];

