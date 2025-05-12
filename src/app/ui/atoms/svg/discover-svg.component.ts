import { Component } from '@angular/core';

@Component({
  selector: 'app-discover-svg',
  standalone: true,
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="32"
    viewBox="0 0 48 32"
  >
    <defs>
      <linearGradient
        id="d9b__linear-gradient"
        x1="8.84"
        x2="46.58"
        y1="23.82"
        y2="23.82"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#e34a1e" />
        <stop offset="1" stop-color="#f17815" />
      </linearGradient>
      <linearGradient
        id="d9b__linear-gradient-2"
        x1="24.65"
        x2="31.26"
        y1="12.41"
        y2="12.41"
        gradientTransform="rotate(45 25.123 9.576)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".02" stop-color="#9a291e" />
        <stop offset=".18" stop-color="#cc3721" />
        <stop offset=".36" stop-color="#e34a1e" />
        <stop offset=".75" stop-color="#f17815" />
        <stop offset="1" stop-color="#f59314" />
      </linearGradient>
    </defs>
    <g>
      <g>
        <rect width="46.6" height="30.6" x=".7" y=".7" fill="#fff" rx="3.3" />
        <path
          fill="#ddd"
          d="M44 1.4A2.61 2.61 0 0 1 46.6 4v24a2.61 2.61 0 0 1-2.6 2.6H4A2.61 2.61 0 0 1 1.4 28V4A2.61 2.61 0 0 1 4 1.4zM44 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4"
        />
        <path
          fill="url(#d9b__linear-gradient)"
          fill-rule="evenodd"
          d="M8.84 30.62s14-2.47 23.05-6.17A66.7 66.7 0 0 0 46.58 17v11a2.59 2.59 0 0 1-2.6 2.6z"
        />
        <path
          d="M5.39 15.66s2.67.3 2.67-2.06c0-2.37-2.67-2.07-2.67-2.07zm-1.2-5.3h2.08a3.23 3.23 0 0 1 3.08 3.16 3.23 3.23 0 0 1-3.08 3.16H4.19zm6.98 0H9.9v6.37h1.27z"
          class="d9b__cls-4"
        />
        <path
          d="M15.07 11.83a1.48 1.48 0 0 0-1-.48.8.8 0 0 0-.88.64c0 .28 0 .43.79.76s2 .58 2 2a2.07 2.07 0 0 1-2.11 2.14 2.72 2.72 0 0 1-2.28-1.21l.79-.79a1.8 1.8 0 0 0 1.38.84.83.83 0 0 0 .93-.89c0-.32-.19-.64-.73-.84s-2-.4-2-1.83a1.87 1.87 0 0 1 2-1.91 3.08 3.08 0 0 1 1.79.75zm6.2.26a2.2 2.2 0 0 0-1.55-.7 2.17 2.17 0 0 0 0 4.33 2.2 2.2 0 0 0 1.55-.72v1.5a3.35 3.35 0 1 1-1.55-6.32 3.2 3.2 0 0 1 1.55.38z"
          class="d9b__cls-5"
        />
        <path
          d="M28.2 10.36h1.37l1.76 4.17L33 10.36h1.37l-2.68 6.53h-.79zm12.22 1.06v1.86h.68a.88.88 0 0 0 .86-.89v-.08a.89.89 0 0 0-.86-.89zm-1.24-1.06h2.07a1.89 1.89 0 0 1 .62 3.71l1.94 2.66h-1.54l-1.72-2.54h-.13v2.54h-1.24zm-.93 2.51V14h-2.16v1.62h2.26v1.12h-3.53v-6.38h3.53v1.12h-2.26v1.39z"
          class="d9b__cls-4"
        />
        <path
          fill="url(#d9b__linear-gradient-2)"
          d="M22.79 15.91a3.3 3.3 0 1 0 0-4.67 3.3 3.3 0 0 0 0 4.67"
        />
      </g>
    </g>
  </svg>`,
})
export class DiscoverSVGComponent {}
