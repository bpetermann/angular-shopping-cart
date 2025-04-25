import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { FilterService } from '../../../core/services/filter.service';
import { ProductsService } from '../../../core/services/products.service';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';
import { ProductComponent } from '../../molecules/shared/product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, SpinnerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductsService);
  private filterService = inject(FilterService);
  private destroyRef = inject(DestroyRef);

  private storeItems = signal<Product[]>([]);
  isLoading = signal(false);
  error = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);

    const subscribtion = this.productService.getProducts().subscribe({
      next: (res) => this.storeItems.set(res),
      error: () => this.error.set(true),
      complete: () => this.isLoading.set(false),
    });

    this.destroyRef.onDestroy(() => subscribtion.unsubscribe());
  }

  readonly products = computed(() => {
    const searchTerms = this.filterService.searchTerm().trim().split(' ');
    const category = this.filterService.category();

    return this.storeItems().filter((product) =>
      this.productService.filterProduct(product, category, searchTerms)
    );
  });
}
