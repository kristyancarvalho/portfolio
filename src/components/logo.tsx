import { Link } from 'react-router-dom';
interface LogoProps {
    theme: 'light' | 'dark'
}

export function Logo({ theme }: LogoProps) {
    return (
        <Link key="home" to="/">
            <code className={`lg:text-2xl min-[320px]:text-xl
                ${
                    theme === 'light' ? 'text-zinc-600' : 'dark:text-white'
                 }`}>
                    [kristyan<strong className='text-bold text-violet-500'>.dev</strong>]
            </code>
        </Link>
    )
}