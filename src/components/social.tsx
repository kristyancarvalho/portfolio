import { Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function SocialMedia() {
    return (
        <div className="flex gap-4 text-sm">
            <Link to="https://github.com/kristyancarvalho" target="_blank" className="text-white hover:underline">
                <code className="flex items-center gap-1">
                    <Github />
                </code>
            </Link>
            <Link to="https://www.instagram.com/carvalho.kristyan/" target="_blank" className="text-pink-300 hover:underline">
                <code className="flex items-center gap-1">
                    <Instagram />
                </code>
            </Link>
        </div>
    )
}