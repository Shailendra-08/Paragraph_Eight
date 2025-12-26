import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 md:py-20">
      <div class="container-custom max-w-xl">
        <div class="card p-6 sm:p-8 md:p-12">
          <h1 class="text-3xl sm:text-4xl font-bold mb-6">Contact</h1>

          <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
            <input class="input" placeholder="Name" formControlName="name" />
            <input class="input" placeholder="Email" formControlName="email" />
            <textarea class="input h-32" placeholder="Message" formControlName="message"></textarea>

            <button class="btn-primary w-full py-3" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  submit() {
    console.log(this.form.value);
  }
}
 