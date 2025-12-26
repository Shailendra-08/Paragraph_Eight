import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-16 md:py-24">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p class="text-lg text-slate-600">
              Have a question or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div class="card p-8 md:p-12">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  placeholder="Your full name"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all"
                />
                @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                  <p class="text-red-600 text-sm mt-1">Name is required</p>
                }
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  placeholder="your.email@example.com"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all"
                />
                @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                  <p class="text-red-600 text-sm mt-1">
                    @if (contactForm.get('email')?.errors?.['required']) {
                      Email is required
                    } @else {
                      Please enter a valid email
                    }
                  </p>
                }
              </div>

              <div>
                <label for="subject" class="block text-sm font-semibold text-slate-900 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  formControlName="subject"
                  placeholder="What is this about?"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all"
                />
                @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                  <p class="text-red-600 text-sm mt-1">Subject is required</p>
                }
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  id="message"
                  formControlName="message"
                  placeholder="Your message..."
                  rows="6"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all resize-none"
                ></textarea>
                @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                  <p class="text-red-600 text-sm mt-1">Message is required</p>
                }
              </div>

              @if (submitted) {
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p class="text-green-800 font-semibold">Thank you for reaching out!</p>
                  <p class="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                </div>
              }

              <button
                type="submit"
                [disabled]="contactForm.invalid || submitted"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  contactForm: FormGroup;
  submitted = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Value:', this.contactForm.value);
      this.submitted = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }
  }
}
