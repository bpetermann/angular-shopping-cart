import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';

@Component({
  selector: 'app-nav-bar',
  imports: [LogoComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
