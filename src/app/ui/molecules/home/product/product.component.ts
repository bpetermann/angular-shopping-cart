import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeartSVGComponent } from '@atoms/svg';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { FavoriteService } from '@core/services/favorite.service';
import { FilterService } from '@core/services/filter.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, HeartSVGComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private cartService = inject(CartService);
  private filterService = inject(FilterService);
  private favoriteService = inject(FavoriteService);

  favorites = this.favoriteService.favoritItems;
  searchValue = this.filterService.searchTerm;
  product = input.required<Product>();

  isFavorite = computed(
    () => !!this.favorites().find(({ id }) => id === this.product().id)
  );

  onAdd() {
    this.cartService.addCartItem(this.product());
    if (this.isFavorite()) this.favoriteService.toggleFavorite(this.product());
  }

  onToggleLike() {
    this.favoriteService.toggleFavorite(this.product());
  }

  highlightText(word: string) {
    const searchTerm = this.searchValue().trim().toLowerCase();

    if (!searchTerm) return false;

    return searchTerm
      .split(' ')
      .some((search) => word.toLowerCase().includes(search));
  }
}
