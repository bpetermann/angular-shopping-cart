import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<CartItem[]>([]);
  isOpen = signal<boolean>(false);

  amount = computed(() =>
    this.cart().reduce((prev, { amount }) => prev + amount, 0)
  );

  onClose() {
    this.isOpen.set(false);
  }

  onOpen() {
    this.isOpen.set(true);
  }

  addCartItem(item: Product) {
    const existingCartItem = this.cart().find(({ id }) => id === item.id);

    if (existingCartItem) {
      this.cart.update((prev) =>
        prev.map((item) =>
          item.id === existingCartItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
    } else {
      this.cart.update((prev) => [...prev, { ...item, amount: 1 }]);
    }
  }

  deleteCartItem(productId: string) {
    const { amount, id } = this.cart().find(({ id }) => id === productId)!;
    if (amount > 1) {
      this.cart.update((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
      );
    } else {
      this.cart.update((prev) => prev.filter(({ id }) => id !== productId));
    }
  }
}
