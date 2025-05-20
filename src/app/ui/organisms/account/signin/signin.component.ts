import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';
import { AccountService } from '@core/services/account.service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, PrimaryButtonComponent, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  form = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl(null, {
      validators: [Validators.required],
    }),
  });

  acccountService = inject(AccountService);
  error = signal<string | undefined>(undefined);
  passwordInvalid = signal<boolean>(false);

  get emailIsInvalid() {
    const { email } = this.form.controls;
    return email.touched && email.dirty && email.invalid;
  }

  resetEmailError() {
    this.form.controls.email.markAsUntouched();
  }

  resetPasswordError() {
    this.passwordInvalid.set(false);
  }

  onSubmit() {
    const { email, password } = this.form.controls;

    if (!email.value) {
      email.markAsDirty();
      email.markAsTouched();
      return;
    }

    if (!password.value) {
      this.passwordInvalid.set(true);
      return;
    }

    try {
      this.acccountService.login({
        email: email.value,
        password: password.value,
      });
    } catch (e) {
      this.error.set((e as Error).message);
    }
  }
}
