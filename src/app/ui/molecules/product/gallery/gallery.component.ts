import { Component, input } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  product = input.required<Product>();
}
