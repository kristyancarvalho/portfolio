import { Github, Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface SocialProps {
    theme: 'light' | 'dark'
}

export function SocialMedia({ theme }: SocialProps) {
    return (
        <div className="flex gap-4 text-sm">
            <Link to="https://github.com/kristyancarvalho" target="_blank">
                <code className={`flex items-center gap-1 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    <Github />
                </code>
            </Link>
            <Link to="https://www.instagram.com/carvalho.kristyan/" target="_blank">
                <code className={`flex items-center gap-1 ${theme === 'light' ? 'text-pink-500' : 'text-pink-300'}`}>
                    <Instagram />
                </code>
            </Link>
            <Link to="https://wa.link/p3g92v" target="_blank" className={`${theme === 'light' ? 'text-green-500' : 'text-green-300'} hover:underline`}>
                <code className="flex items-center gap-1">
                    <Phone />
                </code>
            </Link>
        </div>
    )
}