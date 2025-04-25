import { Component, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MailSVGComponent, SuccessSVGCommponent } from '../../atoms/svg';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule, MailSVGComponent, SuccessSVGCommponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  newsletterSubsription = signal<boolean>(false);

  isInvalid(email: NgModel) {
    return email.touched && email.dirty && email.invalid && email.value;
  }

  onSubmit(_form: NgForm) {
    this.newsletterSubsription.set(true);
  }
}
