import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <div class="container-custom">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="flex items-center gap-2 text-2xl font-bold text-slate-900 hover:opacity-80 transition-opacity">
            <span class="text-3xl">📝</span>
            <span>ModernBlog</span>
          </a>
          <nav class="flex items-center gap-8">
            <a
              routerLink="/"
              routerLinkActive="text-sky-600"
              [routerLinkActiveOptions]="{exact: true}"
              class="text-slate-600 font-medium hover:text-slate-900 transition-colors relative group"
            >
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              routerLink="/about"
              routerLinkActive="text-sky-600"
              class="text-slate-600 font-medium hover:text-slate-900 transition-colors relative group"
            >
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="text-sky-600"
              class="text-slate-600 font-medium hover:text-slate-900 transition-colors relative group"
            >
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
