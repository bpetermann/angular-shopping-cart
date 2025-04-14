import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appCartButton]',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss',
  host: { 'aria-label': 'Cart' },
})
export class CartButtonComponent {
  count = input<number>(2);
}
