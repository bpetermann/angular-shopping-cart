import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';

@Component({
  selector: 'app-not-found',
  imports: [PrimaryButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  router = inject(Router);

  onClick() {
    this.router.navigate([''], {
      replaceUrl: true,
    });
  }
}
