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
    ReturnSVGComponent,
    CardSVGComponent,
    BoxSVGComponent,
    WalletSVGComponent,
    MailSVGComponent,
    PostSVGComponent,
    DHLSVGComponent,
    HermesSVGComponent,
    BillSVGComponent,
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
  vouchers = [
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
}
