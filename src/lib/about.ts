import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface AboutInfo {
  name: string;
  descriptionHtml: string;
}

export async function getAboutInfo(): Promise<AboutInfo> {
  const aboutPath = path.join(process.cwd(), 'content', 'about.md');

  try {
    const fileContents = fs.readFileSync(aboutPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown to HTML
    const processedContent = await remark().use(html).process(content);
    let descriptionHtml = processedContent.toString();

    // Apply consistent link styling to all <a> tags
    descriptionHtml = descriptionHtml.replace(
      /<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="homepage-link" style="color: #2563eb; opacity: 1; font-weight: bold; text-decoration: underline; line-height: 1;">$2</a>'
    );

    return {
      name: data.name || 'Luciano Tourn',
      descriptionHtml
    };
  } catch (error) {
    // Fallback if file doesn't exist
    console.error('Error reading about.md:', error);
    return {
      name: 'Luciano Tourn',
      descriptionHtml: 'Emprendedor de la salud. Co-fundador en <a href="https://www.wuru.ai/" target="_blank" rel="noopener noreferrer" class="homepage-link" style="color: #2563eb; opacity: 1; font-weight: bold; text-decoration: underline; line-height: 1;">Wúru</a> y Director en Grupo Gamma'
    };
  }
}