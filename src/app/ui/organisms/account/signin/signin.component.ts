import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '@atoms/primary-button/primary-button.component';

@Component({
  selector: 'app-signin',
  imports: [PrimaryButtonComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {}
