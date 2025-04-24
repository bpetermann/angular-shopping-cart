import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  onSubmit({ form }: NgForm) {
    console.log('Email: ', form.controls['email'].value);
    console.log('Fashion: ', form.controls['fashion'].value);
  }
}
