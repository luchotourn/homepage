import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  tags?: string[];
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter((name) => name.endsWith('.md'));
}

export function getPosts(): Post[] {
  const markdownFiles = getMarkdownFiles();
  
  if (markdownFiles.length === 0) {
    return [];
  }

  const allPosts = markdownFiles
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split('T')[0],
        excerpt: data.excerpt || '',
        tags: data.tags || [],
      } as Post;
    });

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      content: contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  const markdownFiles = getMarkdownFiles();
  return markdownFiles.map((name) => name.replace(/\.md$/, ''));
}
