import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';
import { SpinnerComponent } from '@atoms/spinner/spinner.component';
import {
  FlameSVGCommponent,
  HeartSVGComponent,
  SizeSVGCommponent,
} from '@atoms/svg';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { FavoriteService } from '@core/services/favorite.service';
import { ProductsService } from '@core/services/products.service';
import { DeliveryComponent } from '@molecules/product/delivery/delivery.component';

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    PrimaryButtonComponent,
    HeartSVGComponent,
    DeliveryComponent,
    SpinnerComponent,
    SizeSVGCommponent,
    FlameSVGCommponent,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  id = input.required<string>();

  private productService = inject(ProductsService);
  private cartService = inject(CartService);
  private favoriteService = inject(FavoriteService);

  private destroyRef = inject(DestroyRef);

  product = signal<Product | undefined>(undefined);
  favorites = this.favoriteService.favoritItems;
  isLoading = signal(false);
  error = signal(false);

  isFavorite = computed(
    () => !!this.favorites().find(({ id }) => id === this.product()?.id)
  );

  ngOnInit(): void {
    this.isLoading.set(true);

    const subscribtion = this.productService.getProduct(this.id()).subscribe({
      next: (res) => this.product.set(res),
      error: () => this.error.set(true),
      complete: () => this.isLoading.set(false),
    });

    this.destroyRef.onDestroy(() => subscribtion.unsubscribe());
  }

  onAdd() {
    const product = this.product();
    if (!product) return;
    this.cartService.addCartItem(product);
  }

  onToggleLike() {
    this.favoriteService.toggleFavorite(this.product()!);
  }
}
