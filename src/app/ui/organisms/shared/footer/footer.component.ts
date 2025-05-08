import { Component } from '@angular/core';
import { LegalLinksComponent } from '@molecules/shared/footer/legal-links/legal-links.component';
import { OverviewComponent } from '@molecules/shared/footer/overview/overview.component';

@Component({
  selector: 'app-footer',
  imports: [OverviewComponent, LegalLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
