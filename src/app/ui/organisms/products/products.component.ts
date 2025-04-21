import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PRODUCT_API } from '../../../core/constants/product-api';
import { Product } from '../../../core/models/product.model';
import { FilterService } from '../../../core/services/filter.service';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';
import { ProductComponent } from '../../molecules/product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, SpinnerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private filterService = inject(FilterService);
  private destroyRef = inject(DestroyRef);
  private http = inject(HttpClient);

  private storeItems = signal<Product[]>([]);
  isLoading = signal(false);
  error = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);

    const subscribtion = this.http.get<Product[]>(PRODUCT_API).subscribe({
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
      this.filterProducts(product, category, searchTerms)
    );
  });

  private filterProducts(
    product: Product,
    category: string,
    searchTerms: string[]
  ): boolean {
    if (product.category.toLowerCase() !== category) return false;

    const description = product.description.toLowerCase().split(' ');

    return searchTerms.every((term) =>
      description.some((word) => word.includes(term.toLowerCase()))
    );
  }
}
