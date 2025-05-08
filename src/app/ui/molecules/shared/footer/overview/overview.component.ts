import { Component } from '@angular/core';
import {
  BoxSVGComponent,
  CardSVGComponent,
  HelpSVGComponent,
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
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
