import { Component, signal } from '@angular/core';
import { CloseButtonComponent } from '../../atom/close-button/close-button.component';

@Component({
  selector: 'app-info-bar',
  imports: [CloseButtonComponent],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.scss',
})
export class InfoBarComponent {
  isOpen = signal(true);

  onClose() {
    console.log('Called');
    this.isOpen.set(false);
  }
}
