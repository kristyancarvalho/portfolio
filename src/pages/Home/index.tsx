import { NavigationBar } from "../../components/navigation";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
export function HomePage() {
    return (
        <div>
            <NavigationBar />
            <main className="h-screen w-screen flex items-center container pt-12 px-8 min-[320px]:pt-0">
                <div className="-mt-12">
                    <div id="presentation" 
                        className="min-[320px]:mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}       
                            transition={{ delay: 0.2 }}
                        >
                            <code className="text-3xl text-neutral-500 px-4 py-1 bg-neutral-800/50 rounded-sm md:text-2xl min-[320px]:text-xl">Prazer, sou Kristyan,</code>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1, y: -10  }}
                            transition={{ delay: 0.5, type: "just", duration: 0.8 }}
                            className="mt-8"
                        >
                            <span className="text-7xl bg-gradient-to-r from-violet-800 to-violet-400 inline-block text-transparent bg-clip-text font-bold uppercase md:text-5xl  min-[320px]:text-4xl">desenvolvedor <br />full-stack.</span>
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}       
                        transition={{ delay: 0.7 }}
                        className="text-xl w-2/4 text-neutral-500 my-10 md:text-lg md:w-full min-[320px]:text-sm min-[320px]:w-full min-[320px]:-mt-8">
                        Olá! Sou Kristyan Carvalho, um desenvolvedor fullstack apaixonado por criar soluções web inovadoras e eficientes. Com experiência em tecnologias de ponta como TypeScript, Prisma, Fastify, Express, Vite e Next.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}       
                        transition={{ delay: 0.8 }}
                        className="flex gap-4"
                        id="actionButtons"
                    >
                        <button
                            className="bg-violet-500 text-white px-6 py-2 rounded-md hover:bg-violet-600"
                        >
                            Baixar CV
                        </button>
                        <Link to="/projects"
                        className="text-white px-4 py-2 hover:underline">
                            Ver projetos
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -30 }}       
                    transition={{ delay: 0.8, type: "spring", duration: 5 }}
                    className="overflow-visibl mt-20"
                    id="rocketImage"                
                >
                    <img className="z-10 hidden min-[320px]:block" src="/rocket.png" alt="rocket" />
                </motion.div>
            </main>
        </div>
    )
}