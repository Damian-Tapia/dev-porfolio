import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelector {
   isOpen = false;
  currentLang: string;

  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  constructor(private translate: TranslateService) {
    // Configurar idiomas disponibles
    this.translate.addLangs(['en', 'es', 'it']);
    this.translate.setDefaultLang('en');
    
    this.currentLang = 'en';
  }

  ngOnInit() {
    // Detectar y establecer idioma inicial
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = this.translate.getBrowserLang();
    const langToUse = savedLang || (browserLang?.match(/en|es|it/) ? browserLang : 'en');
    
    this.translate.use(langToUse);
    this.currentLang = langToUse;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(langCode: string) {
    this.translate.use(langCode);
    this.currentLang = langCode;
    this.isOpen = false;
    localStorage.setItem('selectedLanguage', langCode);
  }

  getCurrentLanguage(): Language {
    return this.languages.find(lang => lang.code === this.currentLang) || this.languages[0];
  }

  closeDropdown() {
    setTimeout(() => {
      this.isOpen = false;
    }, 200);
  }
}
