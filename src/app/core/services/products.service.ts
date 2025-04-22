import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

  private fetchProducts() {
    return this.http.get<Product[]>(PRODUCT_API);
  }
}
