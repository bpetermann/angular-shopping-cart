import { InjectionToken, Provider } from '@angular/core';

export type Category = 'shoes' | 'bags';

export const categories: Category[] = ['shoes', 'bags'];

export const PRODUCT_CATEGORIES = new InjectionToken<Category[]>(
  'product-categories'
);

export const productCategoriesProvider: Provider = {
  provide: PRODUCT_CATEGORIES,
  useValue: categories,
};
