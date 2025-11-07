import { Component, Input } from '@angular/core';

export interface ProjectCard {
  title: string;
  tech: string;
  image?: string; // Ruta relativa desde public/
  link?: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project!: ProjectCard;

  get imageUrl(): string {
    return this.project.image || '';
  }

  get hasImage(): boolean {
    return !!this.project.image;
  }

  onCardClick(): void {
    if (this.project.link) {
      window.open(this.project.link, '_blank');
    }
  }
}
