import type { BlogPost } from '@/entities/post/model'

const FEED_ENDPOINT = '/api/blog-feed'

export async function fetchLatestPosts(signal?: AbortSignal): Promise<BlogPost[]> {
  const response = await fetch(FEED_ENDPOINT, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = (await response.json()) as { posts?: BlogPost[] }

  return Array.isArray(data.posts) ? data.posts : []
}
