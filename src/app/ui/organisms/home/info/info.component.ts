import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqComponent } from '@atoms/faq/faq.component';
import {
  HelpSVGComponent,
  RedeemSVGComponent,
  TruckSVGComponent,
} from '@atoms/svg';

@Component({
  selector: 'app-info',
  imports: [FaqComponent, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  faqs = [
    {
      question: 'Help & Contact',
      answer:
        'When you complete your order, we will show you in what timeframe your package is expected to arrive',
      svg: HelpSVGComponent,
    },
    {
      question: 'Gift cards',
      answer:
        'You can redeem your promotional voucher in the last step of the order process.',
      svg: RedeemSVGComponent,
    },
    {
      question: 'Shipping',
      answer:
        'If you are shipping internationally, there are several delivery speed options available during the checkout process, usually standard, express and priority delivery.',
      svg: TruckSVGComponent,
    },
  ];
}
