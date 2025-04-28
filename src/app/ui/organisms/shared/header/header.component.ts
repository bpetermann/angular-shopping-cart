import { Component } from '@angular/core';
import { productCategoriesProvider } from '../../../../core/models/category.model';
import { InfoBarComponent } from '../../../molecules/header/info-bar/info-bar.component';
import { NavBarComponent } from '../../../molecules/header/nav-bar/nav-bar.component';
import { NavMobileComponent } from '../../../molecules/header/nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header',
  imports: [InfoBarComponent, NavBarComponent, NavMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [productCategoriesProvider],
})
export class HeaderComponent {}
