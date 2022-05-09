import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'
import type { MDXFrontMatter } from "../lib/types"
import readingTime from 'reading-time'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

const root2 = process.cwd();
export const postsPath = path.join(root2, "posts");
export const getMdx = (fileName: string) => {
  const fullPath = path.join(postsPath, fileName);
  const docSource = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(docSource);

  return {
    frontMatter: {
      ...data,
      slug: fileName.replace(".mdx", ""),
      readingTime: readingTime(content),
    } as MDXFrontMatter,
    content,
  };
};

export const getAllMdx = () => {
  const items = fs.readdirSync(postsPath).map((item) => getMdx(item));
  return items.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );
};