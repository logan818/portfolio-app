import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience';
import { EducationService } from '../../services/education';

@Component({
  imports: [CommonModule],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience implements OnInit {
  private experienceService = inject(ExperienceService);
  private educationService = inject(EducationService);
  entries = signal<any[]>([]);
  schoolEntries = signal<any[]>([]);
  skills: string[] = [
    'ServiceNow Administration',
    'CMDB',
    'ITSM',
    'ITIL',
    'JavaScript',
    'Python',
    'Angular',
  ];

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe((data) => {
      this.entries.set(data);
    });
    this.educationService.getEducation().subscribe((data) => {
      this.schoolEntries.set(data);
    });
  }
}
