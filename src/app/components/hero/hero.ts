import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSelector } from "../language-selector/language-selector";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [
    NgFor,
    LanguageSelector,
    TranslateModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  projects = [
    {
      title: 'Xchange',
      tech: 'Angular • Sass • Tailwind',
      image: 'projects/project1.jpg',
      link: 'https://github.com/tu-usuario/project1'
    },
    {
      title: 'Proline',
      tech: 'Nextjs • TypeScript • SCSS • Tailwind',
      image: 'projects/project2.jpg',
      link: 'https://github.com/tu-usuario/project2'
    },
    {
      title: 'Co-labora',
      tech: 'React • Node.js • MongoDB',
      // Sin imagen, mostrará el ícono por defecto
      link: 'https://github.com/tu-usuario/project3'
    }
  ];

  scrollToProjects(): void {
    const projectsSection = document.querySelector('app-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToGithub(): void {
    window.open('https://github.com/Damian-Tapia', '_blank');
  }
}
