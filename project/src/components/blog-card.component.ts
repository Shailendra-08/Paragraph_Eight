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
        <div class="relative h-48 sm:h-56 md:h-60 overflow-hidden">
          <img
            [src]="post.imageUrl"
            [alt]="post.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-3 left-3 bg-sky-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">
            {{ post.category }}
          </div>
        </div>

        <div class="p-4 sm:p-6">
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 mb-2 line-clamp-2">
            {{ post.title }}
          </h2>

          <p class="text-sm sm:text-base text-slate-600 mb-3 line-clamp-3">
            {{ post.excerpt }}
          </p>

          <div class="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
            <span class="font-semibold text-slate-700">{{ post.author }}</span>
            <span>•</span>
            <span>{{ post.date | date:'MMM d, yyyy' }}</span>
            <span>•</span>
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
