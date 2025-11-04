import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  email = 'hello@developer.com';

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'fa-brands fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'fa-brands fa-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'fa-brands fa-twitter'
    }
  ];

  footerLinks = [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' }
  ];
}
