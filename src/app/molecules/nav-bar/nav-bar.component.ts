import { Component } from '@angular/core';
import { CartButtonComponent } from '../../atoms/cart-button/cart-button.component';
import { LogoComponent } from '../../atoms/logo/logo.component';

@Component({
  selector: 'app-nav-bar',
  imports: [LogoComponent, CartButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
