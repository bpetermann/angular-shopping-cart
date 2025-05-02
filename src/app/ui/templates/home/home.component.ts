import { Component } from '@angular/core';
import { HeroComponent } from '@organisms/home/hero/hero.component';
import { InfoComponent } from '@organisms/home/info/info.component';
import { ProductsComponent } from '@organisms/home/products/products.component';
import { NewsletterComponent } from '@organisms/shared/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ProductsComponent,
    NewsletterComponent,
    InfoComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
