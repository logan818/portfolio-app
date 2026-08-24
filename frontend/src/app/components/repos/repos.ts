import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposService } from '../../services/repos';

@Component({
  imports: [CommonModule],
  selector: 'app-repos',
  styleUrl: './repos.scss',
  templateUrl: './repos.html',
})
export class Repos implements OnInit {
  private reposService = inject(ReposService);
  repos = signal<any[]>([]);

  ngOnInit(): void {
    this.reposService.getRepos().subscribe((data) => {
      this.repos.set(data);
    });
  }
}
