import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PostCard } from '@/entities/post/PostCard'
import { fetchLatestPosts } from '@/entities/post/postService'
import type { BlogPost } from '@/entities/post/model'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Reveal } from '@/shared/ui/Reveal'
import { buttonVariants } from '@/shared/ui/buttonVariants'
import { siteConfig } from '@/shared/config/site'

type Status = 'loading' | 'error' | 'success'

const overlayStyle = {
  background:
    'linear-gradient(to top, rgb(var(--color-background-soft)) 12%, transparent)',
}

export function PostsSection() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('loading')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setStatus('loading')

    fetchLatestPosts(controller.signal)
      .then((result) => {
        setPosts(result)
        setStatus('success')
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [reloadToken])

  return (
    <section
      id="posts"
      className="relative scroll-mt-24 overflow-hidden bg-background-soft py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <p className="type-badge text-primary">{t('posts.eyebrow')}</p>
          <h2 className="type-heading mt-2">{t('posts.title')}</h2>
          <p className="type-body-muted mt-3 max-w-2xl">{t('posts.subtitle')}</p>
        </Reveal>

        {status === 'loading' ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
            {[0, 1, 2].map((key) => (
              <div
                key={key}
                className="h-52 animate-pulse rounded-2xl border border-border bg-surface"
              />
            ))}
          </div>
        ) : null}

        {status === 'loading' ? (
          <p className="sr-only" role="status" aria-live="polite">
            {t('posts.loading')}
          </p>
        ) : null}

        {status === 'error' ? (
          <div
            role="alert"
            className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6"
          >
            <p className="text-sm text-text-muted">{t('posts.error')}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReloadToken((token) => token + 1)}
            >
              {t('posts.retry')}
            </Button>
          </div>
        ) : null}

        {status === 'success' && posts.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-border bg-surface p-6 text-sm text-text-muted">
            {t('posts.empty')}
          </p>
        ) : null}

        {status === 'success' && posts.length > 0 ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.url} as="li" delay={Math.min(index * 0.08, 0.24)} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </ul>
        ) : null}

        <div className="relative z-10 mt-12 flex justify-center">
          <a
            href={siteConfig.blogUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: 'outline', size: 'md' })}
          >
            {t('posts.viewMore')}
            <ArrowUpRight className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
          </a>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={overlayStyle}
      />
    </section>
  )
}
