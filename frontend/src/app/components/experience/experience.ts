import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience';

@Component({
  imports: [CommonModule],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience implements OnInit {
  private experienceService = inject(ExperienceService);
  entries: any[] = [];

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe((data) => {
      this.entries = data;
    });
  }
}
