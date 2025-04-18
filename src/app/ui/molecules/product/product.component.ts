import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { FavoriteService } from '../../../core/services/favorite.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private cartService = inject(CartService);
  private favoriteService = inject(FavoriteService);

  favorites = this.favoriteService.favoritItems;

  isFavorite = computed(
    () => !!this.favorites().find(({ id }) => id === this.product().id)
  );

  product = input.required<Product>();

  onAdd() {
    this.cartService.addCartItem(this.product());
    if (this.isFavorite()) this.favoriteService.toggleFavorite(this.product());
  }

  onToggleLike() {
    this.favoriteService.toggleFavorite(this.product());
  }
}
