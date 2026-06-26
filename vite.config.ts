import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import type { ServerResponse } from 'node:http'
import { getLatestPosts } from './api/blog-feed'

async function sendFeed(response: ServerResponse): Promise<void> {
  response.setHeader('Content-Type', 'application/json')
  try {
    const posts = await getLatestPosts()
    response.setHeader('Cache-Control', 'no-cache')
    response.statusCode = 200
    response.end(JSON.stringify({ posts }))
  } catch {
    response.statusCode = 502
    response.end(JSON.stringify({ posts: [], error: 'Failed to load posts' }))
  }
}

function blogFeedPlugin(): Plugin {
  return {
    name: 'blog-feed-dev',
    configureServer(server) {
      server.middlewares.use('/api/blog-feed', (_request, response) => {
        void sendFeed(response)
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/blog-feed', (_request, response) => {
        void sendFeed(response)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), blogFeedPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }
          if (id.includes('motion') || id.includes('framer-motion')) {
            return 'motion'
          }
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'i18n'
          }
          if (id.includes('react-dom')) {
            return 'react-dom'
          }
          return undefined
        },
      },
    },
  },
})
