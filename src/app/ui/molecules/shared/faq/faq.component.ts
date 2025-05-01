import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  isOpen = signal<boolean>(false);

  answer = input.required();

  onToggle() {
    this.isOpen.update((prev) => !prev);
  }
}
