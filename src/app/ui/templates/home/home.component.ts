import { Component } from '@angular/core';
import { HeroComponent } from '../../organisms/home/hero/hero.component';
import { NewsletterComponent } from '../../organisms/home/newsletter/newsletter.component';
import { ProductsComponent } from '../../organisms/home/products/products.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProductsComponent, NewsletterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
