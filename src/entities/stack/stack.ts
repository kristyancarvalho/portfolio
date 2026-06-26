import type { StackItem } from '@/entities/stack/model'

export const stack: StackItem[] = [
  { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript', featured: true },
  { id: 'javascript', name: 'JavaScript', category: 'languages', icon: 'javascript', featured: true },
  { id: 'go', name: 'Go', category: 'languages', icon: 'go', featured: true },
  { id: 'python', name: 'Python', category: 'languages', icon: 'python', featured: true },
  { id: 'lua', name: 'Lua', category: 'languages', icon: 'lua' },
  { id: 'sql', name: 'SQL', category: 'languages' },
  { id: 'bash', name: 'Bash', category: 'languages', icon: 'bash' },

  { id: 'react', name: 'React', category: 'frontend', icon: 'react', featured: true },
  { id: 'vite', name: 'Vite', category: 'frontend', icon: 'vite', featured: true },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind', featured: true },
  { id: 'astro', name: 'Astro', category: 'frontend', icon: 'astro', featured: true },
  { id: 'motion', name: 'Motion', category: 'frontend' },
  { id: 'lottie', name: 'Lottie', category: 'frontend', icon: 'lottie' },
  { id: 'html', name: 'HTML', category: 'frontend' },
  { id: 'css', name: 'CSS', category: 'frontend' },

  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'nodejs', featured: true },
  { id: 'fastify', name: 'Fastify', category: 'backend', icon: 'fastify', featured: true },
  { id: 'express', name: 'Express', category: 'backend', icon: 'express', featured: true },
  { id: 'zod', name: 'Zod', category: 'backend', icon: 'zod', featured: true },
  { id: 'prisma', name: 'Prisma', category: 'backend', icon: 'prisma', featured: true },
  { id: 'rest', name: 'REST APIs', category: 'backend' },

  { id: 'postgresql', name: 'PostgreSQL', category: 'data', icon: 'postgresql', featured: true },
  { id: 'mongodb', name: 'MongoDB', category: 'data', icon: 'mongodb', featured: true },
  { id: 'redis', name: 'Redis', category: 'data', icon: 'redis', featured: true },
  { id: 'gridfs', name: 'GridFS', category: 'data' },

  { id: 'docker', name: 'Docker', category: 'devops', icon: 'docker', featured: true },
  { id: 'github-actions', name: 'GitHub Actions', category: 'devops', icon: 'githubactions', featured: true },
  { id: 'vercel', name: 'Vercel', category: 'devops', icon: 'vercel', featured: true },
  { id: 'nginx', name: 'Nginx', category: 'devops', icon: 'nginx', featured: true },
  { id: 'render', name: 'Render', category: 'devops' },
  { id: 'flyio', name: 'Fly.io', category: 'devops', icon: 'flydotio' },
  { id: 'digitalocean', name: 'DigitalOcean', category: 'devops', icon: 'digitalocean' },

  { id: 'arch', name: 'Arch Linux', category: 'tooling', icon: 'archlinux', featured: true },
  { id: 'neovim', name: 'Neovim', category: 'tooling', icon: 'neovim', featured: true },
  { id: 'git', name: 'Git', category: 'tooling', icon: 'git', featured: true },
  { id: 'bubbletea', name: 'Bubble Tea', category: 'tooling', featured: true },
  { id: 'hyprland', name: 'Hyprland', category: 'tooling', icon: 'hyprland' },
  { id: 'tmux', name: 'tmux', category: 'tooling', icon: 'tmux' },
  { id: 'github-cli', name: 'GitHub CLI', category: 'tooling', icon: 'github' },
  { id: 'npm', name: 'npm', category: 'tooling', icon: 'npm' },
  { id: 'pnpm', name: 'pnpm', category: 'tooling', icon: 'pnpm' },

  { id: 'react-native', name: 'React Native', category: 'mobile', icon: 'react' },
  { id: 'expo', name: 'Expo', category: 'mobile', icon: 'expo' },
  { id: 'google-maps', name: 'Google Maps API', category: 'mobile', icon: 'googlemaps' },
]

export const featuredStack = stack.filter((item) => item.featured)
