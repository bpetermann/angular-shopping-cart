import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './ui/organisms/footer/footer.component';
import { HeaderComponent } from './ui/organisms/header/header.component';
import { HomeComponent } from './ui/templates/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-shopping-cart';
}
