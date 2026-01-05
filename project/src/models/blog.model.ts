export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  imageUrl: string;
  readTime: number;
}
