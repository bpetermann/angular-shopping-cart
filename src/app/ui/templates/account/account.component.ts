import { Component, computed, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';
import { AccountService } from '@core/services/account.service';
import { SigninComponent } from '@organisms/account/signin/signin.component';
import { SignupComponent } from '@organisms/account/signup/signup.component';
import { WelcomeComponent } from '@organisms/account/welcome/welcome.component';

@Component({
  selector: 'app-account',
  imports: [
    PrimaryButtonComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  acccountService = inject(AccountService);

  user = this.acccountService.currentUser;
  isLoginView = signal<boolean>(true);

  isRegisterView = computed(() => this.isLoginView() === false);

  switchText = computed(() =>
    this.isLoginView() ? 'Already a member? Login' : 'New customer? Start here'
  );

  logout() {
    this.acccountService.logout();
  }

  onViewSwitch() {
    this.isLoginView.update((prev) => !prev);
  }
}
