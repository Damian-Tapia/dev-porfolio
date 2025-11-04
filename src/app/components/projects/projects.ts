import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
  imagePosition: 'left' | 'right';
}
@Component({
  selector: 'app-projects',
  imports: [
    NgFor
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
projects: Project[] = [
    {
      id: 1,
      title: 'Sports Platform',
      role: 'Lead Frontend Developer',
      problem: 'Complex sports data visualization with real-time updates needed better UX',
      solution: 'Built React-based dashboard with optimized rendering and WebSocket integrations',
      result: '40% faster load times, 2x user engagement',
      techStack: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Tailwind'],
      imagePosition: 'left'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      role: 'Fullstack Developer',
      problem: 'Traditional checkout flow caused 50% cart abandonment rate',
      solution: 'Redesigned checkout with Next.js, integrated Stripe, and added one-click purchasing',
      result: 'Reduced abandonment to 25%, increased revenue by 45%',
      techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
      imagePosition: 'right'
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      role: 'Frontend Architect',
      problem: 'Legacy Angular admin system was slow and difficult to maintain',
      solution: 'Migrated to modern Angular with modular architecture and component library',
      result: '60% reduction in maintenance time, improved developer experience',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Material UI', 'SCSS'],
      imagePosition: 'left'
    }
  ];
}
