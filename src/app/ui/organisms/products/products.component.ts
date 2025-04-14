import { Component, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductComponent } from '../../molecules/product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly products = signal<Product[]>([
    {
      id: '1',
      name: 'Brogues',
      description: 'Green wingtip brogues',
      price: 85.99,
    },
    {
      id: '2',
      name: 'Sandals',
      description: 'Maroon sandals',
      price: 24.99,
    },
    {
      id: '3',
      name: 'Sneakers',
      description: 'Multi-coloured Sneakers',
      price: 69.99,
    },
  ]);
}
