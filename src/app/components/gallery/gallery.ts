import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  icon: string;
}
@Component({
  selector: 'app-gallery',
  imports: [
    NgFor,
    TranslateModule
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Dashboard UI',
      category: 'Data Visualization',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Form Components',
      category: 'Input & Validation',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Data Tables',
      category: 'Complex Grid Layout',
      icon: '📋'
    },
    {
      id: 4,
      title: 'Modals & Dialogs',
      category: 'Interactive UI',
      icon: '💬'
    },
    {
      id: 5,
      title: 'Navigation Systems',
      category: 'UX Patterns',
      icon: '🧭'
    },
    {
      id: 6,
      title: 'Dark/Light Themes',
      category: 'Design System',
      icon: '🎨'
    }
  ];
}
