import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <main>
            <NavigationBar />
            <div className="container h-screen w-screen flex flex-col items-center justify-center gap-4">
                <img src="/rocket.png" alt="rocket" className="h-16 w-16 -mr-2"/> 
                <h1 className="text-3xl font-bold text-neutral-500">404</h1>
                <span className="text-xl text-neutral-500">
                    Foguete fora de órbita...
                </span>
                <Link to="/" className="text-lgg text-violet-500 hover:underline">Retornar para o início</Link>
            </div>
            <Footer />
        </main>
    );
}