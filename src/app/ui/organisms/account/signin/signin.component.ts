import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';

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

    console.log(email.value);
    console.log(password.value);
  }
}
