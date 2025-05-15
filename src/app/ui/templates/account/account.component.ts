import { Component, computed, signal } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';

@Component({
  selector: 'app-account',
  imports: [PrimaryButtonComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  view = signal<'login' | 'register'>('login');

  isLoginView = computed(() => this.view() === 'login');

  isRegisterView = computed(() => this.view() === 'register');

  onRegister() {
    if (this.isRegisterView()) console.log('Register Attempt');
    else this.view.set('register');
  }

  onLogin() {
    if (this.isLoginView()) console.log('Login Attempt');
    else this.view.set('login');
  }
}
