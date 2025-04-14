import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'button[appCartButton]',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss',
  host: { 'aria-label': 'Cart' },
})
export class CartButtonComponent {
  constructor(readonly cartService: CartService) {}
}
