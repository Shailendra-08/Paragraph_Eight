import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-16 md:py-24">
      <div class="container-custom">
        <div class="card p-8 md:p-12 max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About ModernBlog</h1>
          <div class="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Welcome to ModernBlog, your go-to source for insights on web development,
              design trends, and cutting-edge technology. We're passionate about sharing
              knowledge and helping developers and designers stay ahead in the ever-evolving
              digital landscape.
            </p>
            <p>
              Our team of experienced writers and developers brings you carefully crafted
              articles that combine practical advice with deep technical knowledge. Whether
              you're a beginner just starting your journey or a seasoned professional
              looking to stay updated, we have something for everyone.
            </p>
            <p>
              Built with Angular 19 and styled with Tailwind CSS, this blog showcases modern
              web development practices and demonstrates what's possible with today's tools
              and technologies. We're committed to creating a clean, accessible, and performant
              reading experience for all our visitors.
            </p>
            <div class="pt-8">
              <a routerLink="/" class="btn-primary inline-block">
                Explore our articles →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
