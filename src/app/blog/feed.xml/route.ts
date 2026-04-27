import { listPosts } from '@/lib/blog'

export const revalidate = 600

const BASE = 'https://www.trinitybps.com'

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case '\'': return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

export async function GET() {
  const posts = listPosts()
  const lastBuildDate = posts[0]?.date ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()

  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${post.slug}</guid>
      <pubDate>${post.date ? new Date(post.date).toUTCString() : lastBuildDate}</pubDate>
      <description>${escapeXml(post.summary)}</description>
      <author>${escapeXml(post.author)}</author>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Trinity Bridge PS — Blog</title>
    <link>${BASE}/blog</link>
    <description>Practical AI adoption insights for regulated industries.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE}/blog/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600, s-maxage=600',
    },
  })
}
