import { inject, Injectable, signal } from '@angular/core';
import { STORAGE_KEYS } from '../constants/storage-keys.constants';
import { Product } from '../models/product.model';
import { Storage, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService implements Storage {
  private favorites = signal<Product[]>([]);
  isOpen = signal<boolean>(false);

  private storageService = inject(StorageService);

  favoritItems = this.favorites.asReadonly();

  init() {
    const favorites = this.storageService.getItem(STORAGE_KEYS.FAVORITES);
    if (favorites) this.favorites.set(JSON.parse(favorites));
  }

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

    this.updateFavoritesStorage();
  }

  private updateFavoritesStorage() {
    this.storageService.setItem(
      STORAGE_KEYS.FAVORITES,
      JSON.stringify(this.favorites())
    );
  }
}
