import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoBarComponent } from './molecules/info-bar/info-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-shopping-cart';
}
