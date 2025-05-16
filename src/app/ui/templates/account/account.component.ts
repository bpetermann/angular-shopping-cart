import { Component, computed, signal } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';
import { SigninComponent } from '@organisms/account/signin/signin.component';
import { SignupComponent } from '@organisms/account/signup/signup.component';

@Component({
  selector: 'app-account',
  imports: [PrimaryButtonComponent, SigninComponent, SignupComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  isLoginView = signal<boolean>(true);

  isRegisterView = computed(() => this.isLoginView() === false);

  onViewSwitch() {
    this.isLoginView.update((prev) => !prev);
  }
}
