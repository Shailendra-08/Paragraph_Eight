import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-900 text-slate-300">
      <div class="container-custom py-12">

        <!-- Top -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <span class="text-2xl">📝</span>
              <span>Paragraph Eight</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
              Thoughts on backend development, modern technology,
              and minimal design. Built with Angular & Tailwind CSS.
            </p>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="text-white font-semibold mb-4">Navigate</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a routerLink="/" class="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a routerLink="/about" class="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Social -->
          <div>
            <h3 class="text-white font-semibold mb-4">Connect</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom -->
        <div
          class="border-t border-slate-800 mt-12 pt-6
                 flex flex-col sm:flex-row items-center justify-between
                 gap-4 text-sm"
        >
          <span>
            © {{ year }} Paragraph Eight. All rights reserved.
          </span>

          <span class="text-slate-400 text-center sm:text-right">
            Built to test Automation Backend
          </span>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
