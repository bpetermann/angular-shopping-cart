import { Component } from '@angular/core';

@Component({
  selector: 'app-login-svg',
  standalone: true,
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 960 960"
    width="24px"
    fill="currentColor"
  >
    <path
      d="M480 480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160 800v-112q0-34 17.5-62.5T224 582q62-31 126-46.5T480 520q66 0 130 15.5T736 582q29 15 46.5 43.5T800 688v112H160Zm80-80h480v-32q0-11-5.5-20T700 654q-54-27-109-40.5T480 600q-56 0-111 13.5T260 654q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560 320q0-33-23.5-56.5T480 240q-33 0-56.5 23.5T400 320q0 33 23.5 56.5T480 400Zm0-80Zm0 400Z"
    />
  </svg>`,
})
export class LoginSVGComponent {}
