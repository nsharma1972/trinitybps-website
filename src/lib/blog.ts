import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  summary: string
  author: string
  tags: string[]
  ogImage?: string
}

export type BlogPost = BlogPostMeta & {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function readMatter(filename: string) {
  const fullPath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(fullPath, 'utf8')
  return matter(raw)
}

function toMeta(filename: string, data: Record<string, unknown>): BlogPostMeta {
  const slug = (data.slug as string) || filename.replace(/\.md$/, '')
  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || '',
    summary: (data.summary as string) || '',
    author: (data.author as string) || 'Trinity Bridge PS',
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    ogImage: data.og_image as string | undefined,
  }
}

export function listPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts = files.map((f) => toMeta(f, readMatter(f).data))
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  for (const filename of files) {
    const parsed = readMatter(filename)
    const meta = toMeta(filename, parsed.data)
    if (meta.slug === slug) {
      return { ...meta, content: parsed.content }
    }
  }
  return null
}
