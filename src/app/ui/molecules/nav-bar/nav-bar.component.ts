import { Component, inject } from '@angular/core';
import { Category } from '../../../core/models/category.model';
import { CartService } from '../../../core/services/cart.service';
import { FavoriteService } from '../../../core/services/favorite.service';
import { FilterService } from '../../../core/services/filter.service';
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
  filterService = inject(FilterService);
  favoritesService = inject(FavoriteService);

  categories: Category[] = ['shoes', 'bags'];

  activeCategory = this.filterService.category;

  onSelectCategory(category: Category) {
    this.filterService.selectCategory(category);
  }

  onOpenCart() {
    this.cartService.open();
  }

  onOpenFavorites() {
    this.favoritesService.open();
  }
}
