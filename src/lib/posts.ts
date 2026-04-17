import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readingTime: number;
  featured: boolean;
  content?: string;
}

export interface Tour {
  slug: string;
  title: string;
  description: string;
  date: string;
  price: number;
  duration: string;
  category: string;
  image: string;
  highlights: string[];
  featured: boolean;
  content?: string;
}

export function getAllPosts(): Post[] {
  const postsDir = path.join(contentDir, 'blog');
  if (!fs.existsSync(postsDir)) return [];

  const filenames = fs.readdirSync(postsDir);
  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || 'practical',
        image: data.image || '/images/placeholder.jpg',
        author: data.author || 'Tonle Team',
        readingTime: data.readingTime || Math.ceil(readingTime(content).minutes),
        featured: data.featured || false,
        content,
      } as Post;
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const postsDir = path.join(contentDir, 'blog');
  const filePath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || 'practical',
    image: data.image || '/images/placeholder.jpg',
    author: data.author || 'Tonle Team',
    readingTime: data.readingTime || Math.ceil(readingTime(content).minutes),
    featured: data.featured || false,
    content,
  };
}

export function getAllTours(): Tour[] {
  const toursDir = path.join(contentDir, 'tours');
  if (!fs.existsSync(toursDir)) return [];

  const filenames = fs.readdirSync(toursDir);
  const tours = filenames
    .filter(name => name.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(toursDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        price: data.price || 0,
        duration: data.duration || '',
        category: data.category || 'culture',
        image: data.image || '/images/placeholder.jpg',
        highlights: data.highlights || [],
        featured: data.featured || false,
        content,
      } as Tour;
    });

  return tours.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getTourBySlug(slug: string): Tour | null {
  const toursDir = path.join(contentDir, 'tours');
  const filePath = path.join(toursDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    price: data.price || 0,
    duration: data.duration || '',
    category: data.category || 'culture',
    image: data.image || '/images/placeholder.jpg',
    highlights: data.highlights || [],
    featured: data.featured || false,
    content,
  };
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(post => post.featured);
}

export function getFeaturedTours(): Tour[] {
  return getAllTours().filter(tour => tour.featured);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getToursByCategory(category: string): Tour[] {
  return getAllTours().filter(tour => tour.category === category);
}
