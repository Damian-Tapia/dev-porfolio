import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [
    NgIf,
    NgFor,
    TranslateModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  frontendSkills = ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SCSS'];
  backendSkills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'];

  stats = [
    { value: '2+', label: 'Years Experience', color: 'primary' },
    { value: '30+', label: 'Projects', color: 'primary' },
    { value: '100%', label: 'Satisfaction', color: 'primary' }
  ];

  techStack = [
    { icon: '</>', title: 'Frontend', subtitle: 'React, Angular' },
    { icon: '🗄️', title: 'Backend', subtitle: 'Node, APIs' },
    { icon: '🚀', title: 'Deploy', subtitle: 'Cloud Ready' }
  ];
}
