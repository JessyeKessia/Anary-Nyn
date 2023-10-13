import { Component } from '@angular/core'
import { faInstagram, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  instagramIcon = faInstagram
  facebookIcon = faFacebook
  whatsappIcon = faWhatsapp
  linkedinIcon = faLinkedin
}
