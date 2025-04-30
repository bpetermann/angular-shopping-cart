import { Component } from '@angular/core';
import { ReturnSVGComponent, TruckSVGComponent } from '@atoms/svg';
import { BoxSVGComponent } from '@atoms/svg/box-svg.component';

@Component({
  selector: 'app-delivery',
  imports: [TruckSVGComponent, BoxSVGComponent, ReturnSVGComponent],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss',
})
export class DeliveryComponent {}
