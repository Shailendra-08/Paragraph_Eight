import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 19',
      excerpt: 'Explore the latest features and improvements in Angular 19, including enhanced performance and new developer tools.',
      content: `Angular 19 brings exciting new features that make development faster and more efficient. The latest release includes improved build times, better type safety, and enhanced developer experience.

The new version introduces several key improvements:

**Performance Enhancements**
Angular 19 includes significant performance optimizations, with faster initial load times and improved runtime performance. The framework now uses more efficient change detection strategies and optimized rendering pipelines.

**Developer Experience**
The developer experience has been enhanced with better error messages, improved debugging tools, and more intuitive APIs. The new CLI features make it easier to scaffold and maintain projects.

**Modern Features**
With full support for modern JavaScript features and improved TypeScript integration, Angular 19 makes it easier to write clean, maintainable code. The framework continues to evolve while maintaining backward compatibility.

Whether you're building a small application or a large enterprise system, Angular 19 provides the tools and features you need to succeed.`,
      author: 'Sarah Johnson',
      date: new Date('2024-12-20'),
      category: 'Web Development',
      imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: 5
    },
    {
      id: 2,
      title: 'Modern Web Design Trends 2024',
      excerpt: 'Discover the latest trends in web design, from minimalism to bold typography, and how to implement them effectively.',
      content: `The web design landscape continues to evolve with new trends that prioritize user experience and visual appeal. Let's explore the key trends shaping modern web design in 2024.

**Minimalist Interfaces**
Clean, minimalist designs continue to dominate, focusing on essential elements and removing unnecessary clutter. This approach improves usability and creates elegant user experiences.

**Bold Typography**
Large, expressive typography has become a powerful tool for creating visual hierarchy and making strong design statements. Custom fonts and variable typography add personality to websites.

**Dark Mode**
Dark mode has become a standard feature, offering users a comfortable viewing experience in low-light environments while reducing eye strain.

**Microinteractions**
Subtle animations and interactive elements enhance user engagement and provide valuable feedback, making interfaces feel more responsive and alive.

**Accessibility First**
Modern design prioritizes accessibility, ensuring that websites are usable by everyone regardless of their abilities or the devices they use.

These trends represent a shift toward more thoughtful, user-centered design that balances aesthetics with functionality.`,
      author: 'Michael Chen',
      date: new Date('2024-12-18'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: 7
    },
    {
      id: 3,
      title: 'Building Scalable Applications',
      excerpt: 'Learn best practices for architecting applications that can grow with your business needs and handle increased load.',
      content: `Building scalable applications requires careful planning and the right architectural decisions from the start. Here's how to create applications that can grow with your needs.

**Architecture Patterns**
Choose the right architecture pattern for your application. Microservices, modular monoliths, and serverless architectures each have their place depending on your requirements.

**Database Design**
Proper database design is crucial for scalability. Use indexing strategically, implement caching layers, and consider read replicas for handling increased traffic.

**Performance Optimization**
Optimize your application's performance from the beginning. Implement lazy loading, code splitting, and efficient state management to ensure smooth user experiences.

**Monitoring and Observability**
Set up comprehensive monitoring and logging systems to understand your application's behavior and identify bottlenecks before they become problems.

**Testing Strategy**
Implement a robust testing strategy that includes unit tests, integration tests, and end-to-end tests to ensure reliability as your application scales.

By following these principles, you can build applications that are ready to handle growth and maintain performance under increasing demands.`,
      author: 'Emily Rodriguez',
      date: new Date('2024-12-15'),
      category: 'Architecture',
      imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: 8
    },
    {
      id: 4,
      title: 'TypeScript Best Practices',
      excerpt: 'Master TypeScript with these proven practices that will make your code more maintainable and type-safe.',
      content: `TypeScript has become the go-to language for building robust JavaScript applications. Here are best practices to help you write better TypeScript code.

**Strong Typing**
Leverage TypeScript's type system to catch errors at compile time. Use interfaces and types to define clear contracts between different parts of your application.

**Avoid Any**
The 'any' type defeats the purpose of TypeScript. Use unknown or proper types instead, and enable strict mode in your tsconfig.json.

**Utility Types**
Master TypeScript's built-in utility types like Partial, Required, Pick, and Omit to manipulate types efficiently without repetition.

**Generics**
Use generics to write reusable, type-safe functions and components. They provide flexibility while maintaining type safety.

**Type Guards**
Implement type guards to narrow types safely and handle union types effectively, making your code more predictable and maintainable.

**Const Assertions**
Use const assertions (as const) to create readonly types and ensure immutability where needed.

Following these practices will help you write TypeScript code that is both safer and more maintainable.`,
      author: 'David Kim',
      date: new Date('2024-12-12'),
      category: 'Programming',
      imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: 6
    },
    {
      id: 5,
      title: 'Responsive Design Essentials',
      excerpt: 'Create beautiful, responsive websites that work seamlessly across all devices with modern CSS techniques.',
      content: `Responsive design is no longer optional—it's essential. Learn how to create websites that look great and function perfectly on any device.

**Mobile-First Approach**
Start designing for mobile devices first, then progressively enhance for larger screens. This ensures a solid foundation and improves performance on mobile devices.

**Flexible Grids**
Use CSS Grid and Flexbox to create flexible layouts that adapt to different screen sizes. These modern layout tools provide powerful, intuitive ways to structure your content.

**Responsive Images**
Implement responsive images using srcset and sizes attributes, or use modern formats like WebP with fallbacks for better performance.

**Breakpoints**
Choose breakpoints based on your content rather than specific devices. This creates a more flexible design that works across a wider range of screen sizes.

**Touch-Friendly Interfaces**
Design interactive elements with touch screens in mind. Use appropriate sizing for buttons and links, and implement touch gestures where appropriate.

**Testing**
Test your designs on real devices whenever possible. Browser dev tools are helpful, but nothing beats testing on actual hardware.

By following these principles, you can create websites that provide excellent experiences regardless of how users access them.`,
      author: 'Lisa Wang',
      date: new Date('2024-12-10'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: 6
    },
    {
      id: 6,
      title: 'State Management in Modern Apps',
      excerpt: 'Understanding different approaches to state management and choosing the right solution for your application.',
      content: `State management is one of the most critical aspects of modern web applications. Let's explore different approaches and when to use them.

**Local State**
For simple components, local state is often sufficient. Use component state for data that doesn't need to be shared with other parts of your application.

**State Management Libraries**
Libraries like NgRx, Akita, or simple services can help manage complex state. Choose based on your application's complexity and team expertise.

**Server State**
Distinguish between client state and server state. Tools like Angular's HttpClient with RxJS operators make managing server state more efficient.

**State Immutability**
Maintain immutable state to prevent unexpected side effects and make your application's behavior more predictable.

**Performance Considerations**
Be mindful of performance when managing state. Use change detection strategies, memoization, and selective updates to optimize rendering.

**Testing**
State management code should be thoroughly tested. Pure functions and clear state transitions make testing easier and more reliable.

Understanding these concepts will help you build applications with predictable, maintainable state management.`,
      author: 'James Martinez',
      date: new Date('2024-12-08'),
      category: 'Architecture',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: 7
    }
  ];

  getAllPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }

  getPostsByCategory(category: string): BlogPost[] {
    return this.blogPosts.filter(post => post.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.blogPosts.map(post => post.category))];
  }
}
