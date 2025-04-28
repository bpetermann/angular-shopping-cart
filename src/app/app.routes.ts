import { Routes } from '@angular/router';
import { HomeComponent } from './ui/templates/home/home.component';
import { ProductComponent } from './ui/templates/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:productId',
    component: ProductComponent,
  },
];
