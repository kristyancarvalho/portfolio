const withAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: withAlpha('--color-background'),
        'background-soft': withAlpha('--color-background-soft'),
        surface: withAlpha('--color-surface'),
        'surface-soft': withAlpha('--color-surface-soft'),
        'surface-strong': withAlpha('--color-surface-strong'),
        text: withAlpha('--color-text'),
        'text-muted': withAlpha('--color-text-muted'),
        'text-soft': withAlpha('--color-text-soft'),
        primary: withAlpha('--color-primary'),
        'primary-soft': withAlpha('--color-primary-soft'),
        'primary-strong': withAlpha('--color-primary-strong'),
        accent: withAlpha('--color-accent'),
        'accent-soft': withAlpha('--color-accent-soft'),
        border: withAlpha('--color-border'),
        'border-strong': withAlpha('--color-border-strong'),
        focus: withAlpha('--color-focus'),
        success: withAlpha('--color-success'),
        danger: withAlpha('--color-danger'),
        warning: withAlpha('--color-warning'),
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      borderColor: {
        DEFAULT: withAlpha('--color-border'),
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
