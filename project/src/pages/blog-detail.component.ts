import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [DatePipe, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50">
      @if (post) {
        <article class="bg-white">
          <div class="container-custom py-12 md:py-16">
            <a routerLink="/" class="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors mb-6">
              ← Back to all posts
            </a>
            <div class="mb-8">
              <span class="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                {{ post.category }}
              </span>
              <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {{ post.title }}
              </h1>
              <div class="flex flex-wrap items-center gap-4 text-slate-600 text-sm">
                <span class="font-semibold text-slate-700">By {{ post.author }}</span>
                <span class="text-slate-300">•</span>
                <span>{{ post.date | date: 'MMMM d, yyyy' }}</span>
                <span class="text-slate-300">•</span>
                <span>{{ post.readTime }} min read</span>
              </div>
            </div>
          </div>

          <div class="w-full h-96 md:h-[500px] overflow-hidden">
            <img
              [src]="post.imageUrl"
              [alt]="post.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="container-custom py-16 md:py-24">
            <div class="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-sky-600 prose-strong:text-slate-900">
              <div [innerHTML]="formatContent(post.content)"></div>
            </div>
          </div>

          <div class="border-t border-slate-200">
            <div class="container-custom py-12 md:py-16">
              <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div class="flex items-center gap-6">
                  <div class="w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {{ getInitials(post.author) }}
                  </div>
                  <div>
                    <div class="text-lg font-bold text-slate-900">{{ post.author }}</div>
                    <div class="text-slate-600">Writer & Developer</div>
                  </div>
                </div>
                <a routerLink="/" class="btn-primary">
                  View all posts →
                </a>
              </div>
            </div>
          </div>
        </article>
      } @else {
        <div class="container-custom py-32 text-center">
          <h1 class="text-4xl font-bold text-slate-900 mb-4">Post not found</h1>
          <p class="text-lg text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a routerLink="/" class="btn-primary">Go back home</a>
        </div>
      }
    </div>
  `
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  post: BlogPost | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.blogService.getPostById(id);

    if (!this.post) {
      console.warn('Post not found');
    }
  }

  formatContent(content: string): string {
    return content
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return `<h2>${paragraph.slice(2, -2)}</h2>`;
        }
        return `<p>${paragraph}</p>`;
      })
      .join('');
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
