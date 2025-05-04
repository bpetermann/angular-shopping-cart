import { Component, inject } from '@angular/core';
import { CloseButtonComponent } from '@atoms/close-button/close-button.component';
import { FavoriteService } from '@core/services/favorite.service';
import { ProductComponent } from '@molecules/home/product/product.component';
import { ModalComponent } from '@molecules/shared/modal/modal.component';

@Component({
  selector: 'app-favorites',
  imports: [ModalComponent, ProductComponent, CloseButtonComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  favoriteService = inject(FavoriteService);

  favorites = this.favoriteService.favoritItems;
  isOpen = this.favoriteService.isOpen;

  onClose() {
    this.favoriteService.close();
  }
}
