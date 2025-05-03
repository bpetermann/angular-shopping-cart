import { Component } from '@angular/core';
import { FaqComponent } from '@atoms/faq/faq.component';

@Component({
  selector: 'app-info',
  imports: [FaqComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  faqs = [
    {
      question: 'Material and care instructions',
      answer: 'More about material and care instructions',
    },
    { question: 'More about this product', answer: 'More about this product' },
    { question: 'Fit', answer: 'More about the fit' },
    { question: 'Care instructions', answer: 'More about care instructions' },
  ];
}
