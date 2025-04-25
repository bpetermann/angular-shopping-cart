import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { CloseButtonComponent } from '../../atoms/close-button/close-button.component';
import { ModalComponent } from '../../molecules/shared/modal/modal.component';

@Component({
  selector: 'app-cart',
  imports: [ModalComponent, CloseButtonComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);
  cart = this.cartService.cartItems;

  total = computed(() =>
    this.cart().reduce((prev, { price, amount }) => prev + price * amount, 0)
  );

  amount = computed(() =>
    this.cart().reduce((prev, { amount }) => prev + amount, 0)
  );

  onCloseCart() {
    this.cartService.close();
  }

  onAdd(product: Product) {
    this.cartService.addCartItem(product);
  }

  onDelete(id: string) {
    this.cartService.deleteCartItem(id);
  }
}
