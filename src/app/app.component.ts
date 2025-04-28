import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './core/services/cart.service';
import { FavoriteService } from './core/services/favorite.service';
import { CartComponent } from './ui/organisms/shared/cart/cart.component';
import { FavoritesComponent } from './ui/organisms/shared/favorites/favorites.component';
import { FooterComponent } from './ui/organisms/shared/footer/footer.component';
import { HeaderComponent } from './ui/organisms/shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CartComponent,
    FavoritesComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-shopping-cart';

  readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoriteService);

  ngOnInit() {
    this.cartService.storageInit();
    this.favoritesService.storageInit();
  }
}
