import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BlogDetailComponent } from './pages/blog-detail.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
