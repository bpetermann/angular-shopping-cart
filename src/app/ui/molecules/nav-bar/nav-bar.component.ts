import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { FavoriteService } from '../../../core/services/favorite.service';
import { CartButtonComponent } from '../../atoms/cart-button/cart-button.component';
import { LikeButtonComponent } from '../../atoms/like-button/like-button.component';
import { LogoComponent } from '../../atoms/logo/logo.component';

@Component({
  selector: 'app-nav-bar',
  imports: [LogoComponent, CartButtonComponent, LikeButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  cartService = inject(CartService);
  favoritesService = inject(FavoriteService);

  categories: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'shoes',
    },
    {
      id: 2,
      name: 'bags',
    },
  ];

  activeCategory = signal<{ id: number; name: string }>(this.categories[0]);

  onSelectCategory(itemId: number) {
    this.activeCategory.set(this.categories.find(({ id }) => id === itemId)!);
  }

  onOpenCart() {
    this.cartService.open();
  }

  onOpenFavorites() {
    this.favoritesService.open();
  }
}
