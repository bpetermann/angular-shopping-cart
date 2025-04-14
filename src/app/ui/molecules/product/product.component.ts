import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private cartService: CartService) {}

  product = input.required<Product>();

  onAdd() {
    this.cartService.addCartItem(this.product());
  }
}
