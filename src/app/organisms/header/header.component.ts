import { Component } from '@angular/core';
import { InfoBarComponent } from '../../molecules/info-bar/info-bar.component';
import { NavBarComponent } from '../../molecules/nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  imports: [InfoBarComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
