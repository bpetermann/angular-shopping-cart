import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appLikeButton]',
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss',
})
export class LikeButtonComponent {
  count = input<number>(3);
}
