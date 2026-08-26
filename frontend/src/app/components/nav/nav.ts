import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, CommonModule],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {
  isDark = signal(localStorage.getItem('theme') === 'dark');
  isMenuOpen = signal(false);

  constructor() {
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark.set(!this.isDark());
    localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    this.applyTheme();
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  private applyTheme(): void {
    document.documentElement.classList.toggle('dark', this.isDark());
  }

}
