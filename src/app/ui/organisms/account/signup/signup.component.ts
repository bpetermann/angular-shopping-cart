import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, PrimaryButtonComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  get emailIsInvalid() {
    const { email } = this.form.controls;
    return email.touched && email.dirty && email.invalid;
  }

  get passwordIsInvalid() {
    const { password } = this.form.controls;
    return password.touched && password.dirty && password.invalid;
  }

  resetEmailError() {
    this.form.controls.email.markAsUntouched();
  }

  resetPasswordError() {
    this.form.controls.password.markAsUntouched();
  }

  onSubmit() {
    const { email, password } = this.form.controls;

    if (!email.value || !password.value || password.invalid || email.invalid) {
      email.markAsDirty();
      password.markAsDirty();
      this.form.markAllAsTouched();
      return;
    }

    console.log('Register: ', email.value, password.value);
  }
}
