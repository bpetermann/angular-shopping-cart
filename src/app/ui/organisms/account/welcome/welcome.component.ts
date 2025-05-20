import { Component, input, output } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';
import { User } from '@core/models/user.model';

@Component({
  selector: 'app-welcome',
  imports: [PrimaryButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  user = input.required<User>();
  logout = output<void>();

  onLogout() {
    this.logout.emit();
  }
}
