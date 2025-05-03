import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';
import {
  FlameSVGCommponent,
  HeartSVGComponent,
  SizeSVGCommponent,
} from '@atoms/svg';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { FavoriteService } from '@core/services/favorite.service';

@Component({
  selector: 'app-action',
  imports: [
    CommonModule,
    PrimaryButtonComponent,
    HeartSVGComponent,
    SizeSVGCommponent,
    FlameSVGCommponent,
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
})
export class ActionComponent {
  product = input.required<Product>();

  private favoriteService = inject(FavoriteService);
  private cartService = inject(CartService);

  favorites = this.favoriteService.favoritItems;

  isFavorite = computed(
    () => !!this.favorites().find(({ id }) => id === this.product()?.id)
  );

  onAdd() {
    const product = this.product();
    if (!product) return;
    this.cartService.addCartItem(product);
  }

  onToggleLike() {
    this.favoriteService.toggleFavorite(this.product()!);
  }
}
