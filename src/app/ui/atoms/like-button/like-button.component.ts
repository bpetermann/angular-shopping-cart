import { Component, computed } from '@angular/core';
import { FavoriteService } from '../../../core/services/favorite.service';

@Component({
  selector: 'button[appLikeButton]',
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss',
})
export class LikeButtonComponent {
  constructor(readonly favoriteService: FavoriteService) {}

  amount = computed(() => this.favoriteService.favorites().length);
}
