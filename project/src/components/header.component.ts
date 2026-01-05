import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <div class="container-custom px-4">
        <div class="flex items-center justify-between h-16">

          <!-- Logo -->
          <a
            routerLink="/"
            class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-900"
          >
            <span class="text-2xl md:text-3xl">📝</span>
            <span>Paragraph Eight</span>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-8">
            <a routerLink="/" routerLinkActive="text-sky-600" class="nav-link">Home</a>
            <a routerLink="/about" routerLinkActive="text-sky-600" class="nav-link">About</a>
            <a routerLink="/contact" routerLinkActive="text-sky-600" class="nav-link">Contact</a>
          </nav>

          <!-- Mobile Button -->
          <button
            class="md:hidden text-slate-800"
            (click)="open = !open"
          >
            ☰
          </button>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="open" class="md:hidden pb-4">
          <nav class="flex flex-col gap-4">
            <a routerLink="/" (click)="open=false">Home</a>
            <a routerLink="/about" (click)="open=false">About</a>
            <a routerLink="/contact" (click)="open=false">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  open = false;
}


