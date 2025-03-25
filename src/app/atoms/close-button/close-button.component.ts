import { Component } from '@angular/core';

@Component({
  selector: 'button[appCloseButton]',
  imports: [],
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.scss',
  host: { 'aria-label': 'Close' },
})
export class CloseButtonComponent {}
