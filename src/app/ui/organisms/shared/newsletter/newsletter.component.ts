import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MailSVGComponent, SuccessSVGCommponent } from '@atoms/svg';

@Component({
  selector: 'app-newsletter',
  imports: [
    FormsModule,
    MailSVGComponent,
    SuccessSVGCommponent,
    ReactiveFormsModule,
  ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  form = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    fashion: new FormControl('wFashion'),
  });

  isSubscribed = signal<boolean>(false);

  get emailIsInvalid() {
    const { email } = this.form.controls;
    return email.touched && email.dirty && email.invalid;
  }

  get emailValue() {
    return this.form.controls.email.value;
  }

  reset() {
    this.form.controls.email.markAsUntouched();
  }

  checkOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      target.checked = true;
      target.dispatchEvent(new Event('change'));
    }
  }

  onSubmit() {
    if (!this.emailValue) {
      this.form.controls.email.markAsDirty();
      this.form.controls.email.markAsTouched();
      return;
    }

    this.isSubscribed.set(true);
  }
}
