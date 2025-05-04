import { Component, signal } from '@angular/core';
import { CloseButtonComponent } from '@atoms/close-button/close-button.component';

@Component({
  selector: 'app-info-bar',
  imports: [CloseButtonComponent],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.scss',
})
export class InfoBarComponent {
  isOpen = signal(true);

  onClose() {
    this.isOpen.set(false);
  }
}
