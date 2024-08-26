import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";

interface NotFoundProps {
    theme: 'light' | 'dark';
}

export function NotFound({ theme }: NotFoundProps) {
    return (
        <div className={`transition-colors ${theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-200/50'}`}>
            <main>
                <div className="container h-screen w-screen flex flex-col items-center justify-center gap-4">
                    <img src="/rocket.png" alt="rocket" className="h-16 w-16 -mr-2"/> 
                    <h1 className="text-3xl font-bold text-neutral-500">404</h1>
                    <span className="text-xl text-neutral-500">
                        Foguete fora de órbita...
                    </span>
                    <Link to="/" className="text-lgg text-violet-500 hover:underline">Retornar para o início</Link>
                </div>
                <Footer theme={theme}/>
            </main>
        </div>
    );
}