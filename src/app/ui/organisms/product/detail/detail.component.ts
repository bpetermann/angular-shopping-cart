import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { SpinnerComponent } from '@atoms/spinner/spinner.component';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products.service';
import { ActionComponent } from '@molecules/product/action/action.component';
import { DeliveryComponent } from '@molecules/product/delivery/delivery.component';
import { GalleryComponent } from '@molecules/product/gallery/gallery.component';
import { InfoComponent } from '@molecules/product/info/info.component';

@Component({
  selector: 'app-detail',
  imports: [
    GalleryComponent,
    ActionComponent,
    InfoComponent,
    CommonModule,
    DeliveryComponent,
    SpinnerComponent,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  id = input.required<string>();

  private productService = inject(ProductsService);
  private destroyRef = inject(DestroyRef);

  product = signal<Product | undefined>(undefined);
  isLoading = signal(false);
  error = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);

    const subscribtion = this.productService.getProduct(this.id()).subscribe({
      next: (res) => this.product.set(res),
      error: () => this.error.set(true),
      complete: () => this.isLoading.set(false),
    });

    this.destroyRef.onDestroy(() => subscribtion.unsubscribe());
  }
}
