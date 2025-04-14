import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../molecules/product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly products = signal<
    {
      id: string;
      name: string;
      description: string;
      price: number;
    }[]
  >([
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
