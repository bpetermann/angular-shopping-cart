import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BillSVGComponent,
  BoxSVGComponent,
  CardSVGComponent,
  DHLSVGComponent,
  HelpSVGComponent,
  HermesSVGComponent,
  MailSVGComponent,
  PostSVGComponent,
  RedeemSVGComponent,
  ReturnSVGComponent,
  TruckSVGComponent,
  WalletSVGComponent,
} from '@atoms/svg';

@Component({
  selector: 'app-overview',
  imports: [
    TruckSVGComponent,
    HelpSVGComponent,
    RedeemSVGComponent,
    CardSVGComponent,
    WalletSVGComponent,
    MailSVGComponent,
    CommonModule,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  help = [
    'All help topics',
    'Payment by invoice',
    'Track shipment',
    'Complaining about a faulty item',
  ];

  help2 = [
    'Shipping information',
    'Return order',
    'Newsletter registration',
    'Report a security vulnerability',
    'Product security',
  ];

  gitVouchers = [
    'Buy gift vouchers',
    'About gift vouchers and discount codes',
    'Redeem a gift voucher',
  ];

  about = [
    'Corporate Website',
    'Jobs',
    'Newsroom',
    'Investor Relations',
    'Lounge',
    'Partner',
  ];

  partners = [PostSVGComponent, DHLSVGComponent, HermesSVGComponent];

  paymentMethods = [BillSVGComponent];

  advantages = [
    { text: 'Free shipping for purchases over $30', icon: TruckSVGComponent },
    { text: '30 days return policy', icon: ReturnSVGComponent },
    { text: 'Flexible payment options', icon: BoxSVGComponent },
  ];
}
