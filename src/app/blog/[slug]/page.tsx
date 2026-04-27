import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, listPosts } from '@/lib/blog'

export const revalidate = 600

export function generateStaticParams() {
  return listPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return { title: 'Post not found — Trinity Bridge PS' }
  const url = `https://www.trinitybps.com/blog/${post.slug}`
  return {
    title: `${post.title} — Trinity Bridge PS`,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  }
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Trinity Bridge PS',
      logo: { '@type': 'ImageObject', url: 'https://www.trinitybps.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.trinitybps.com/blog/${post.slug}` },
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Link href="/blog" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
        ← All posts
      </Link>

      <header className="mt-6 mb-10">
        <time className="text-sm text-slate-500" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">{post.summary}</p>
        )}
      </header>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-700 hover:prose-a:text-blue-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-8">
        <p className="text-slate-600">
          Want to talk through how this applies to your organization?{' '}
          <Link
            href="/contact?utm_source=blog&utm_medium=footer&utm_campaign=consult"
            className="font-semibold text-blue-700 hover:text-blue-800"
          >
            Book a free call
          </Link>
          .
        </p>
      </footer>
    </article>
  )
}
