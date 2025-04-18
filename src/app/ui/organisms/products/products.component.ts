import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { FilterService } from '../../../core/services/filter.service';
import { ProductComponent } from '../../molecules/product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private filterService = inject(FilterService);

  private items = signal<Product[]>([
    {
      id: '1',
      name: 'Brogues',
      description: 'Green wingtip brogues',
      price: 85.99,
      category: 'shoes',
    },
    {
      id: '2',
      name: 'Sandals',
      description: 'Maroon sandals',
      price: 24.99,
      category: 'shoes',
    },
    {
      id: '3',
      name: 'Sneakers',
      description: 'Multi-coloured Sneakers',
      price: 69.99,
      category: 'shoes',
    },
    {
      id: '4',
      name: 'Handbag',
      description: 'Brown leather handbag',
      price: 89.99,
      category: 'bags',
    },
  ]);

  readonly products = computed(() =>
    this.items().filter(
      (product) => product.category === this.filterService.category()
    )
  );
}
