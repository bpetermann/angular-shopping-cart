import { Component, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
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

  constructor(readonly cartService: CartService) {}

  onSelectCategory(itemId: number) {
    this.activeCategory.set(this.categories.find(({ id }) => id === itemId)!);
  }

  showCart() {
    console.log(this.cartService.cart());
  }
}
