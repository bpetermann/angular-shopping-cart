import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { CloseButtonComponent } from '../../atoms/close-button/close-button.component';
import { ModalComponent } from '../../molecules/modal/modal.component';

@Component({
  selector: 'app-cart',
  imports: [ModalComponent, CloseButtonComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);

  onCloseCart() {
    this.cartService.onClose();
  }

  onAdd(product: Product) {
    this.cartService.addCartItem(product);
  }

  onDelete(id: string) {
    this.cartService.deleteCartItem(id);
  }
}
