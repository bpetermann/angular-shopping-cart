import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'button[appCartButton]',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss',
  host: { 'aria-label': 'Cart' },
})
export class CartButtonComponent {
  readonly cartService = inject(CartService);

  amount = computed(() =>
    this.cartService.cartItems().reduce((prev, { amount }) => prev + amount, 0)
  );
}
