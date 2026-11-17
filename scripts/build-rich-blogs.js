import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { batch1 } from './data/batch1.js';
import { batch2 } from './data/batch2.js';
import { batch3 } from './data/batch3.js';
import { batch4 } from './data/batch4.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allPosts = [...batch1, ...batch2, ...batch3, ...batch4];

console.log(`Total posts collected: ${allPosts.length}`);

const header = `export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  date: string;
  updatedDate?: string;
  readTime?: string;
  image: string;
  featured?: boolean;
  author?: BlogAuthor;
  keyTakeaways?: string[];
  faqs?: BlogFAQ[];
  content: string;
}

export const blogPosts: BlogPost[] = `;

const tsContent = header + JSON.stringify(allPosts, null, 2) + ";\n";

const targetPath = path.resolve(__dirname, '../src/data/blogs.ts');
fs.writeFileSync(targetPath, tsContent, 'utf-8');

console.log(`Successfully generated ${allPosts.length} rich blog posts at ${targetPath}`);
