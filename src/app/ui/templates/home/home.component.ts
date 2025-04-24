import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { FavoriteService } from '../../../core/services/favorite.service';
import { CartComponent } from '../../organisms/cart/cart.component';
import { FavoritesComponent } from '../../organisms/favorites/favorites.component';
import { HeroComponent } from '../../organisms/hero/hero.component';
import { NewsletterComponent } from '../../organisms/newsletter/newsletter.component';
import { ProductsComponent } from '../../organisms/products/products.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ProductsComponent,
    CartComponent,
    FavoritesComponent,
    NewsletterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoriteService);

  ngOnInit() {
    this.cartService.storageInit();
    this.favoritesService.storageInit();
  }
}
