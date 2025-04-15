import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CartComponent } from '../../organisms/cart/cart.component';
import { HeroComponent } from '../../organisms/hero/hero.component';
import { ProductsComponent } from '../../organisms/products/products.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProductsComponent, CartComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public cartService = inject(CartService);
}
