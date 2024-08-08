import { Logo } from "./logo";
import { SocialMedia } from "./social";

interface FooterProps {
    theme: 'light' | 'dark'
}

export function Footer({ theme }: FooterProps) {
    return (
        <>
            <footer className={`z-50 w-full transition-colors ${theme === 'light' ? 'bg-zinc-200/50' : 'bg-black'}`}>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col mb-4 gap-4">
                            <Logo theme={"dark"} />
                            <div className="flex items-center justify-center">
                                <SocialMedia theme={theme} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}