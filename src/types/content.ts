import { ReadTimeResults } from 'reading-time';

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
};

export type BlogType = {
  code: string;
  frontMatter: BlogFrontmatter;
};

export type LibraryFrontmatter = {
  slug: string;
  title: string;
  readingTime: ReadTimeResults;
  description: string;
  tags: string;
};

export type LibraryType = {
  code: string;
  frontMatter: LibraryFrontmatter;
};

export type Frontmatter = BlogFrontmatter | LibraryFrontmatter;