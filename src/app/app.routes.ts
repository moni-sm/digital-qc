<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // Redirect blank to home
  { path: '', redirectTo: 'dynamic-forms/components/dynamic-field', pathMatch: 'full' },
<<<<<<< HEAD

  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'form2', loadComponent: () => import('./forms/form2/form2.component').then(m => m.Form2Component) },
  { path: 'signature', loadComponent: () => import('./signature/signature.component').then(m => m.SignatureComponent) },
  { path: 'forms', loadComponent: () => import('./forms/form-field1/form-field.component').then(m=> m.Form1Component) },
  { path: 'form3', loadComponent: () => import('./forms/form3/form3.component').then(m => m.Form3Component) },
  { path: 'form3/:title', loadComponent: () => import('./forms/form3/form3.component').then(m => m.Form3Component) },
  { path: 'submitted', loadComponent: () => import('./forms/submitted/submitted.component').then(m => m.SubmittedComponent) },
];

=======
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'form2', loadComponent: () => import('./forms/form2/form2.component').then(m => m.Form2Component) },
  { path: 'form3', loadComponent: () => import('./forms/form3/form3.component').then(m => m.Form3Component) },
  { path: 'signature', loadComponent: () => import('./signature/signature.component').then(m => m.SignatureComponent) },
  { path: 'forms', loadComponent: () => import('./forms/form-field1/form-field.component').then(m=> m.Form1Component) },


];

=======
import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // Redirect blank to home
  { path: '', redirectTo: 'dynamic-forms/components/dynamic-field', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'form2', loadComponent: () => import('./forms/form2/form2.component').then(m => m.Form2Component) },
  { path: 'form3', loadComponent: () => import('./forms/form3/form3.component').then(m => m.Form3Component) },
  { path: 'signature', loadComponent: () => import('./signature/signature.component').then(m => m.SignatureComponent) },
  { path: 'forms', loadComponent: () => import('./forms/form-field1/form-field.component').then(m=> m.Form1Component) },


];

>>>>>>> 1505aa24dbf61226c00c70103f3e6b81f7bf0658
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
