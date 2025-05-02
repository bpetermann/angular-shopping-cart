import { Component, input } from '@angular/core';
import { DetailComponent } from '@organisms/product/detail/detail.component';
import { NewsletterComponent } from '@organisms/shared/newsletter/newsletter.component';

@Component({
  selector: 'app-product',
  imports: [DetailComponent, NewsletterComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productId = input.required<string>();
}
