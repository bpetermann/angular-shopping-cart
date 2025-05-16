import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';

@Component({
  selector: 'app-signup',
  imports: [PrimaryButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
