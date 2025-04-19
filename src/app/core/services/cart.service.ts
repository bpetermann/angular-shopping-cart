import { inject, Injectable, signal } from '@angular/core';
import { STORAGE_KEYS } from '../constants/storage-keys.constants';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { OnStorageInit, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnStorageInit {
  private cart = signal<CartItem[]>([]);
  isOpen = signal<boolean>(false);
  private storageService = inject(StorageService);
  cartItems = this.cart.asReadonly();

  storageInit() {
    const cart = this.storageService.getItem(STORAGE_KEYS.CART);
    if (cart) this.cart.set(JSON.parse(cart));
  }

  close() {
    this.isOpen.set(false);
  }

  open() {
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

    this.setCartStorage();
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

    this.setCartStorage();
  }

  private setCartStorage() {
    this.storageService.setItem(STORAGE_KEYS.CART, JSON.stringify(this.cart()));
  }
}
