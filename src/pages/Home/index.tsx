import { NavigationBar } from "../../components/navigation";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { Download } from 'lucide-react';

export function HomePage() {
    return (
        <div className="overflow-x-hidden">
            <NavigationBar />
            <main className="lg:h-screen lg:pb-0 min-[320px]:pb-12 min-[320px]:h-auto w-screen flex lg:items-center container lg:mt-12 px-8 min-[320px]:mt-40 min-[320px]:items-start">
                <div className="-mt-12">
                    <div id="presentation" 
                        className="min-[320px]:mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}       
                            transition={{ delay: 0.2 }}
                        >
                            <code className="text-3xl uppercase text-neutral-500 px-4 py-1 bg-neutral-800/50 rounded-sm md:text-2xl min-[320px]:text-lg">Prazer, sou Kristyan!</code>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1, y: -10  }}
                            transition={{ delay: 0.5, type: "just", duration: 0.8 }}
                            className="mt-8"
                        >
                            <span className="text-7xl lg:text-8xl bg-gradient-to-r from-violet-800 to-violet-400 inline-block text-transparent bg-clip-text font-bold uppercase md:text-5xl  min-[320px]:text-4xl">desenvolvedor <br />full-stack.</span>
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}       
                        transition={{ delay: 0.7 }}
                        className="text-xl w-2/4 min-[320px]:text-neutral-500 lg:text-neutral-400/80 my-20 md:text-lg md:w-full min-[320px]:text-sm min-[320px]:w-full min-[320px]:-mt-10">
                        Olá! Sou Kristyan Carvalho, um desenvolvedor fullstack apaixonado por criar soluções web inovadoras e eficientes. Com experiência em tecnologias de ponta como TypeScript, Prisma, Fastify, Express, Vite e Next.
                    </motion.p>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}       
                        transition={{ delay: 0.8 }}
                        className="flex w-full min-[320px]:flex-col min-[320px]:items-center"
                    >    
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: -25 }}       
                            transition={{ delay: 0.8, type: "tween", duration: 1, repeat: Infinity, repeatType: "mirror" }}
                            className="pb-12"
                            id="rocketImage"                
                        >
                            <img  loading="lazy" className="z-10 h-16 w-16 hidden min-[320px]:block lg:hidden" src="/rocket.png" alt="rocket" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}       
                        transition={{ delay: 0.8 }}
                        id="actionButtons"
                        className="flex lg:flex-row gap-4 min-[320px]:flex-col min-[320px]:items-center"
                    >
                        <a href="KristyanCarvalho.pdf" download="KristyanCarvalho-cv"
                            className="font-semibold bg-violet-500 text-white px-6 flex items-center gap-2 py-2 rounded-md hover:bg-violet-600"
                        >
                            <Download />
                            Baixar currículo
                        </a>
                        <Link to="/projects"
                        className="text-white px-4 py-2 hover:underline">
                            Ver projetos
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}       
                    transition={{ delay: 0.8 }}
                >    
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: -25 }}       
                        transition={{ delay: 0.8, type: "tween", duration: 1, repeat: Infinity, repeatType: "mirror" }}
                        className="mt-20"
                        id="rocketImage"                
                    >
                        <img className="z-10 hidden lg:block" src="/rocket.png" alt="rocket" />
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}