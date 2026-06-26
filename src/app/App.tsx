import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'

export function App() {
  return (
    <main className="flex min-h-screen items-center">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="type-display">Kristyan Carvalho</h1>
        <p className="type-subheading">Full-Stack Developer</p>
        <Button>Download resume</Button>
      </Container>
    </main>
  )
}
