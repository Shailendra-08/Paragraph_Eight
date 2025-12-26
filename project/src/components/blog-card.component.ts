import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogPost } from '../models/blog.model';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <article class="card overflow-hidden">
      <a [routerLink]="['/blog', post.id]" class="block group">
        <div class="relative h-60 overflow-hidden">
          <img
            [src]="post.imageUrl"
            [alt]="post.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-4 left-4 bg-sky-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
            {{ post.category }}
          </div>
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
            {{ post.title }}
          </h2>
          <p class="text-slate-600 text-sm mb-4 line-clamp-3">
            {{ post.excerpt }}
          </p>
          <div class="flex items-center gap-2 text-xs text-slate-500">
            <span class="font-semibold text-slate-700">{{ post.author }}</span>
            <span class="text-slate-300">•</span>
            <span>{{ post.date | date: 'MMM d, yyyy' }}</span>
            <span class="text-slate-300">•</span>
            <span>{{ post.readTime }} min</span>
          </div>
        </div>
      </a>
    </article>
  `
})
export class BlogCardComponent {
  @Input({ required: true }) post!: BlogPost;
}
