import { Logo } from "./logo";
import { SocialMedia } from "./social";

export function Footer() {
    return (
        <>
            <footer className="bg-black z-50">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col mb-4 gap-4">
                            <Logo />
                            <div className="flex items-center justify-center">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}