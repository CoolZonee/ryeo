import { Component } from '@angular/core';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  firstCol = [
    { name: 'BECOME A MEMBER', link: '/register' },
    { name: 'SEND US FEEDBACK', link: '/feedback' },
    { name: 'ORDER STATUS', link: '/order-status' },
    { name: 'BECOME A MEMBER', link: '/register' },
    { name: "PAYMENT OPTIONS", link: '/payment-options'},
  ]

  secondCol = [
    { name: 'CONTACT US', link: '/contact-us' },
    { name: 'FAQ', link: '/faq' },
    { name: 'ABOUT US', link: '/about-us' },
  ]
}
