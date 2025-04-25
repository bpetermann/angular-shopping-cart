import { Component, inject } from '@angular/core';
import { FavoriteService } from '../../../core/services/favorite.service';
import { CloseButtonComponent } from '../../atoms/close-button/close-button.component';
import { ModalComponent } from '../../molecules/shared/modal/modal.component';
import { ProductComponent } from '../../molecules/shared/product/product.component';

@Component({
  selector: 'app-favorites',
  imports: [ModalComponent, ProductComponent, CloseButtonComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  favoriteService = inject(FavoriteService);

  favorites = this.favoriteService.favoritItems;

  onClose() {
    this.favoriteService.close();
  }
}
