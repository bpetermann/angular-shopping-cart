import { Component } from '@angular/core';

@Component({
  selector: 'app-mastercard-svg',
  standalone: true,
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="32"
    fill="none"
    viewBox="0 0 48 32"
  >
    <rect width="47" height="31" x=".5" y=".5" fill="#fff" rx="3.5" />
    <rect width="47" height="31" x=".5" y=".5" stroke="#D0D1D3" rx="3.5" />
    <path fill="#FF5F00" d="M28.367 8.15h-8.736v15.7h8.736z" />
    <path
      fill="#EB001B"
      d="M20.186 16.002A9.97 9.97 0 0 1 24 8.151a9.984 9.984 0 1 0 0 15.7 9.97 9.97 0 0 1-3.813-7.849"
    />
    <path
      fill="#F79E1B"
      d="M40.154 16.001a9.984 9.984 0 0 1-16.155 7.849 9.984 9.984 0 0 0 0-15.7A9.984 9.984 0 0 1 40.154 16zM39.2 22.186v-.322h.13v-.067H39v.067h.142v.322zm.64 0v-.389h-.1l-.116.278-.116-.278h-.089v.389h.072v-.292l.108.253h.075l.108-.253v.294z"
    />
  </svg>`,
})
export class MasterCardSVGComponent {}
