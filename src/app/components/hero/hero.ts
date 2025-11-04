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
    { id: 1, title: 'Project 1', tech: 'Next.js • React • Tailwind' },
    { id: 2, title: 'Project 2', tech: 'Next.js • React • Tailwind' },
    { id: 3, title: 'Project 3', tech: 'Next.js • React • Tailwind' }
  ];
}
