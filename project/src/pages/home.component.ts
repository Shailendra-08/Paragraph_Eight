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
      <section class="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20 md:py-32">
        <div class="container-custom">
          <div class="text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to ModernBlog
            </h1>
            <p class="text-lg md:text-xl opacity-95 font-light">
              Discover insights on web development, design, and technology
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-24">
        <div class="container-custom">
          <div class="mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Latest Articles</h2>
            <div class="w-16 h-1 bg-sky-600 rounded-full"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
