import { Routes } from '@angular/router';
import { HomeComponent } from './ui/templates/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:productId',
    loadComponent: () =>
      import('./ui/templates/product/product.component').then(
        (mod) => mod.ProductComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./ui/templates/not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent
      ),
    title: 'Page not found',
  },
];
