import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-links',
  imports: [],
  templateUrl: './legal-links.component.html',
  styleUrl: './legal-links.component.scss',
})
export class LegalLinksComponent {
  socialMedia = ['facebook', 'spotify', 'instagram', 'youtube', 'twitter'];
  links = ['About', 'Imprint', 'Terms & Condition', ' Data Settings'];
}
