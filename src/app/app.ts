import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Gallery } from './components/gallery/gallery';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, // Add this line
  imports: [
    RouterOutlet,
    Hero,
    About,
    Projects,
    Gallery,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dev-portfolio');
}
