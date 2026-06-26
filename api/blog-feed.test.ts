import { describe, expect, it } from 'vitest'
import { parseFeed } from './blog-feed'

const sampleFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog</title>
    <item>
      <title>First post</title>
      <link>https://blog.example.dev/posts/first</link>
      <description>The first description.</description>
      <pubDate>Sun, 21 Jun 2026 23:50:00 GMT</pubDate>
    </item>
    <item>
      <title>Second post</title>
      <link>https://blog.example.dev/posts/second</link>
      <description>The second description.</description>
      <pubDate>Sat, 20 Jun 2026 10:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Third post</title>
      <link>https://blog.example.dev/posts/third</link>
      <description>The third description.</description>
      <pubDate>Fri, 19 Jun 2026 10:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Fourth post</title>
      <link>https://blog.example.dev/posts/fourth</link>
      <description>The fourth description.</description>
      <pubDate>Thu, 18 Jun 2026 10:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`

describe('parseFeed', () => {
  it('returns only the latest three posts', () => {
    const posts = parseFeed(sampleFeed)
    expect(posts).toHaveLength(3)
  })

  it('normalizes each post into title, description, url and ISO date', () => {
    const [first] = parseFeed(sampleFeed)
    expect(first.title).toBe('First post')
    expect(first.description).toBe('The first description.')
    expect(first.url).toBe('https://blog.example.dev/posts/first')
    expect(first.publishedAt).toBe('2026-06-21T23:50:00.000Z')
  })

  it('returns an empty array when there are no items', () => {
    const empty = parseFeed('<rss><channel></channel></rss>')
    expect(empty).toEqual([])
  })
})
