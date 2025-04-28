import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialMedia = ['facebook', 'spotify', 'instagram', 'youtube', 'twitter'];
  links = ['About', 'Imprint', 'Terms & Condition', ' Data Settings'];
}
