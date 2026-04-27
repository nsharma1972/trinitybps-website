import Link from 'next/link'
import type { Metadata } from 'next'
import { listPosts } from '@/lib/blog'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Blog — Trinity Bridge PS',
  description: 'Practical AI adoption insights for regulated industries. Real situations, concrete takeaways, sources you can verify.',
  openGraph: {
    title: 'Trinity Bridge PS — Blog',
    description: 'Practical AI adoption insights for regulated industries.',
    url: 'https://www.trinitybps.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.trinitybps.com/blog',
    types: { 'application/rss+xml': '/blog/feed.xml' },
  },
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndex() {
  const posts = listPosts()

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-slate-600">
          Practical AI adoption insights for regulated industries. Published weekly.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-slate-500">No posts yet — check back soon.</p>
      ) : (
        <ul className="divide-y divide-slate-200">
          {posts.map((post) => (
            <li key={post.slug} className="py-8">
              <article>
                <time className="text-sm text-slate-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-700">
                    {post.title}
                  </Link>
                </h2>
                {post.summary && (
                  <p className="mt-3 text-slate-600 leading-relaxed">{post.summary}</p>
                )}
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
