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
    <div class="bg-slate-50 min-h-screen">

      @if (post) {
        <article class="bg-white">

          <div class="container-custom py-8 sm:py-12">
            <a routerLink="/" class="text-sky-600 font-semibold">← Back</a>

            <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-4">
              {{ post.title }}
            </h1>

            <div class="text-sm text-slate-600 flex flex-wrap gap-2">
              <span class="font-semibold">{{ post.author }}</span>
              <span>•</span>
              <span>{{ post.date | date:'MMMM d, yyyy' }}</span>
              <span>•</span>
              <span>{{ post.readTime }} min</span>
            </div>
          </div>

          <div class="h-64 sm:h-80 md:h-[500px] overflow-hidden">
            <img [src]="post.imageUrl" class="w-full h-full object-cover" />
          </div>

          <div class="container-custom py-12 md:py-20">
            <div class="prose max-w-none">
              <div [innerHTML]="formatContent(post.content)"></div>
            </div>
          </div>
        </article>
      }
    </div>
  `
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  post?: BlogPost;

  ngOnInit() {
    this.post = this.blogService.getPostById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }

  formatContent(content: string): string {
    return content
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  }
}
