import { Component } from '@angular/core';
import { HeroComponent } from '../../organisms/hero/hero.component';
import { ProductsComponent } from '../../organisms/products/products.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProductsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
