import { Component, computed, inject } from '@angular/core';
import { FavoriteService } from '../../../core/services/favorite.service';

@Component({
  selector: 'button[appLikeButton]',
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss',
})
export class LikeButtonComponent {
  favoriteService = inject(FavoriteService);
  favorites = this.favoriteService.favoritItems;

  amount = computed(() => this.favorites().length);
}
