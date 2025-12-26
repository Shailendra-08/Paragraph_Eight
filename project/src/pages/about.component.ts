import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 md:py-20">
      <div class="container-custom">
        <div class="card p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About Paragraph Eight
          </h1>
          <p class="text-slate-700 leading-relaxed">
            A modern blog focused on backend engineering, technology, and clean design.
          </p>

          <a routerLink="/" class="btn-primary mt-8 inline-block">
            Back to home →
          </a>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
