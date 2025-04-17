import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favorites = signal<Product[]>([]);
  isOpen = signal<boolean>(false);

  close() {
    this.isOpen.set(false);
  }

  open() {
    this.isOpen.set(true);
  }

  toggleFavorite(item: Product) {
    const existingFavorite = this.favorites().find(({ id }) => id === item.id);

    if (existingFavorite) {
      this.favorites.update((prev) => prev.filter(({ id }) => id !== item.id));
    } else {
      this.favorites.update((prev) => [...prev, item]);
    }
  }
}
