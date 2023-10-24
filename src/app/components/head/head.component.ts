import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  menuIcon = faBars

  redirectToHome(): void {
    window.open("", "_blank");
  }
}