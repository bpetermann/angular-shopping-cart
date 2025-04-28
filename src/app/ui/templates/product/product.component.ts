import { Component, input } from '@angular/core';
import { DetailComponent } from '@organisms/product/detail/detail.component';

@Component({
  selector: 'app-product',
  imports: [DetailComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productId = input.required<string>();
}
