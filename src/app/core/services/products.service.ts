import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PRODUCT_API } from '../constants/product-api';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  getProducts() {
    return this.fetchProducts();
  }

  getProduct(id: string) {
    return this.fetchProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }

  private fetchProducts() {
    return this.http.get<Product[]>(PRODUCT_API);
  }

  filterProduct(
    product: Product,
    category: string,
    searchTerms: string[] = []
  ): boolean {
    if (product.category.toLowerCase() !== category) return false;

    const description = product.description.toLowerCase().split(' ');

    return searchTerms.every((term) =>
      description.some((word) => word.includes(term.toLowerCase()))
    );
  }
}
