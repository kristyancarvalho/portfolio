import { Link } from 'react-router-dom';
export function Logo() {
    return (
        <Link key="home" to="/">
            <code className="text-white text-2xl">[kristyan<span className='text-bold text-violet-500'>.dev</span>]</code>
        </Link>
    )
}