import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { I18nProvider } from '@/app/providers/I18nProvider'
import { App } from '@/app/App'
import '@/app/styles/globals.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
)
