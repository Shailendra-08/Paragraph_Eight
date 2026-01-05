import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogCardComponent } from '../components/blog-card.component';
import { BlogPost } from '../models/blog.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogCardComponent],
  template: `
    <div class="min-h-screen bg-slate-50">

      <!-- Hero -->
      <section class="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-16 sm:py-20 md:py-32">
        <div class="container-custom text-center">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Welcome to Paragraph Eight
          </h1>
          <p class="text-base sm:text-lg md:text-xl opacity-95">
            Backend, crazy tech & minimal design thoughts
          </p>
        </div>
      </section>

      <!-- Posts -->
      <section class="py-12 sm:py-16 md:py-24">
        <div class="container-custom">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Latest Articles
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (post of posts; track post.id) {
              <app-blog-card [post]="post" />
            }
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {
  private blogService = inject(BlogService);
  posts: BlogPost[] = this.blogService.getAllPosts();
}
