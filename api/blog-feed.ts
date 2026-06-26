import { XMLParser } from 'fast-xml-parser'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export type FeedPost = {
  title: string
  description: string
  publishedAt: string
  url: string
}

const FEED_URL = 'https://blog.kristyan.dev/rss.xml'
const POST_LIMIT = 3

const parser = new XMLParser({
  ignoreAttributes: true,
  trimValues: true,
  processEntities: true,
})

function toText(value: unknown): string {
  if (typeof value === 'string') {
    return value.trim()
  }
  if (typeof value === 'number') {
    return String(value)
  }
  return ''
}

function toIsoDate(value: unknown): string {
  const text = toText(value)
  const date = new Date(text)
  return Number.isNaN(date.getTime()) ? text : date.toISOString()
}

function stripHeavyContent(xml: string): string {
  return xml.replace(/<content:encoded>[\s\S]*?<\/content:encoded>/g, '')
}

export function parseFeed(xml: string, limit = POST_LIMIT): FeedPost[] {
  const parsed = parser.parse(stripHeavyContent(xml))
  const channel = parsed?.rss?.channel
  const rawItems = channel?.item
  const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : []

  return items.slice(0, limit).map((item) => ({
    title: toText(item?.title),
    description: toText(item?.description),
    publishedAt: toIsoDate(item?.pubDate),
    url: toText(item?.link),
  }))
}

export async function getLatestPosts(limit = POST_LIMIT): Promise<FeedPost[]> {
  const response = await fetch(FEED_URL, {
    headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch feed: ${response.status}`)
  }

  const xml = await response.text()
  return parseFeed(xml, limit)
}

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const posts = await getLatestPosts()
    response.setHeader(
      'Cache-Control',
      's-maxage=3600, stale-while-revalidate=86400',
    )
    response.status(200).json({ posts })
  } catch {
    response.status(502).json({ posts: [], error: 'Failed to load posts' })
  }
}
