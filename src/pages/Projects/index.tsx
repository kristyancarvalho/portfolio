import { motion } from "framer-motion";

import { Footer } from "@/components/footer";
import { NavigationBar } from "../../components/navigation";
import { Chrome, Github, Monitor, Smartphone, SquareTerminal   } from "lucide-react";
import { Link } from "react-router-dom";

export function ProjectsPage() {
    return (
        <>
            <NavigationBar />
            <main className="container w-screen lg:py-32 min-[320px]:py-24 lg:px-36">
            <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "just", duration: 0.5 }}
                    className="flex"
                >
                    <code className="text-3xl px-2 py-1 mb-4 text-neutral-500/80 bg-neutral-800/50 rounded-sm overflow-hidden">
                        /projetos
                    </code>
                </motion.span>
                <div id="projects" className="py-6 w-full flex flex-col gap-4">
                    <div id="grid1" className="flex lg:flex-row gap-4 min-[320px]:flex-col">
                        <motion.div
                            id="projeto-Happy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, type: "just", duration: 0.5 }}
                            className="w-64 min-[320px]:w-full h-1/3 rounded-md bg-neutral-800/50 flex flex-col"
                        >
                            <img  loading="lazy" src="/Happy.png" alt="happy-cover" className="w-full lg:h-40 rounded-sm" />
                            <div id="text" className="p-4 flex flex-col gap-4">
                                <span id="title">
                                    <code className="text-3xl text-neutral-500"><strong>Happy</strong></code>
                                </span>
                                <span id="description" className="text-neutral-500/80 -mt-2">
                                    Happy mostra localização de orfanatos próximos abertos para visitação.
                                </span>
                                <div id="platforms" className="flex items-center gap-2 text-neutral-400">
                                    <Chrome />
                                    <Smartphone  />
                                </div>
                            </div>
                            <div id="action-button" className="w-full flex items-center justify-center border-dashed border-t-2 border-neutral-800">
                            <Link to="https://github.com/kristyancarvalho/Happy" target="_blank" className="px-5 py-4 text-white hover:underline flex items-center justify-center gap-3">
                                <Github />
                                Ver no Github
                            </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            id="projeto-Paint"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, type: "just", duration: 0.5 }}
                            className="w-64 min-[320px]:w-full h-1/3 rounded-md bg-neutral-800/50 flex flex-col justify-between"
                        >
                            <img  loading="lazy" src="/Paint.png" alt="paint-cover" className="w-full lg:h-40 rounded-sm"  />
                            <div id="text" className="p-4 flex flex-col gap-4">
                                <span id="title">
                                    <code className="text-3xl text-neutral-500"><strong>Paint</strong></code>
                                </span>
                                <span id="description" className="text-neutral-500/80 -mt-2">
                                    App desktop para desenhar desenvolvido em ElectronJS, ReactJS e MaterialUI
                                </span>
                                <div id="platforms" className="flex items-center gap-2 text-neutral-400">
                                    <Monitor  />
                                </div>
                            </div>
                            <div id="action-button" className="w-full flex items-center justify-center border-dashed border-t-2 border-neutral-800">
                            <Link to="https://github.com/kristyancarvalho/paint-desktop-app" target="_blank" className="px-5 py-4 text-white hover:underline flex items-center justify-center gap-3">
                                <Github />
                                Ver no Github
                            </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            id="projeto-SalottiRun"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, type: "just", duration: 0.5 }}
                            className="w-64 min-[320px]:w-full h-1/3 rounded-md bg-neutral-800/50 flex flex-col justify-between"
                        >
                            <img  loading="lazy" src="/SalottiRun.png" alt="salotti-run-cover" className="w-full lg:h-40 rounded-sm"/>
                            <div id="text" className="p-4 flex flex-col gap-4">
                                <span id="title">
                                    <code className="text-3xl text-neutral-500"><strong>Salotti Run</strong></code>
                                </span>
                                <span id="description" className="text-neutral-500/80 -mt-2">
                                    Salotti Run é um jogo do gênero runner endless para culminância de 2023.
                                </span>
                                <div id="platforms" className="flex items-center gap-2 text-neutral-400">
                                    <Chrome  />
                                </div>
                            </div>
                            <div id="action-button" className="w-full flex items-center justify-center border-dashed border-t-2 border-neutral-800">
                            <Link to="https://github.com/kristyancarvalho/salotti-run-game?tab=readme-ov-file" target="_blank" className="px-5 py-4 text-white hover:underline flex items-center justify-center gap-3">
                                <Github />
                                Ver no Github
                            </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            id="projeto-Letmeask"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, type: "just", duration: 0.5 }}
                            className="w-64 min-[320px]:w-full h-1/3 rounded-md bg-neutral-800/50 flex flex-col justify-between"
                        >
                            <img  loading="lazy" src="/Letmeask.png" alt="let-me-ask-cover" className="w-full lg:h-40 rounded-sm"/>
                            <div id="text" className="p-4 flex flex-col gap-4">
                                <span id="title">
                                    <code className="text-3xl text-neutral-500"><strong>Let me Ask</strong></code>
                                </span>
                                <span id="description" className="text-neutral-500/80 -mt-2">
                                    Crie salas para responder ou para fazer perguntas ao vivo durante uma live.
                                </span>
                                <div id="platforms" className="flex items-center gap-2 text-neutral-400">
                                    <Chrome  />
                                </div>
                            </div>
                            <div id="action-button" className="w-full flex items-center justify-center border-dashed border-t-2 border-neutral-800">
                            <Link to="https://github.com/kristyancarvalho/Letmeask" target="_blank" className="px-5 py-4 text-white hover:underline flex items-center justify-center gap-3">
                                <Github />
                                Ver no Github
                            </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div id="grid2" className="flex lg:flex-row gap-4 min-[320px]:flex-col">
                    <motion.div
                        id="projeto-Benchmark"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, type: "just", duration: 0.5 }}
                        className="lg:w-64 min-[320px]:w-full h-1/3 rounded-md bg-neutral-800/50 flex flex-col justify-between"
                    >
                        <img  loading="lazy" src="/Benchmark.png" alt="benchmark-cover" className="w-full lg:h-40 rounded-sm"/>
                        <div id="text" className="p-4 flex flex-col gap-4">
                            <span id="title">
                                <code className="text-3xl text-neutral-500"><strong>Benchmark: paralelismo</strong></code>
                            </span>
                            <span id="description" className="text-neutral-500/80 -mt-2">
                                Benchmark comparativo entre processamento de imagens em single thread e Worker Threads.
                            </span>
                            <div id="platforms" className="flex items-center gap-2 text-neutral-400">
                                <SquareTerminal  />
                            </div>
                        </div>
                        <div id="action-button" className="w-full flex items-center justify-center border-dashed border-t-2 border-neutral-800">
                        <Link to="https://github.com/kristyancarvalho/multi-thread-image-processing" target="_blank" className="px-5 py-4 text-white hover:underline flex items-center justify-center gap-3">
                            <Github />
                            Ver no Github
                        </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        id="projeto-Planner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, type: "just", duration: 0.5 }}
                        className="lg:w-64 min-[320px]:w-full h-1/3 rounded-md bg-neutral-800/50 flex flex-col justify-between"
                    >
                        <img  loading="lazy" src="/Planner.png" alt="planner-api-cover" className="w-full lg:h-40 rounded-sm"/>
                        <div id="text" className="p-4 flex flex-col gap-4">
                            <span id="title">
                                <code className="text-3xl text-neutral-500"><strong>API Planner</strong></code>
                            </span>
                            <span id="description" className="text-neutral-500/80 -mt-2">
                                API do Plann.er, aplicação de planejamento de viagem. NLW Journey 2024.
                            </span>
                            <div id="platforms" className="flex items-center gap-2 text-neutral-400">
                                <Chrome  />
                            </div>
                        </div>
                        <div id="action-button" className="w-full flex items-center justify-center border-dashed border-t-2 border-neutral-800">
                        <Link to="https://github.com/kristyancarvalho/plann.er-backend" target="_blank" className="px-5 py-4 text-white hover:underline flex items-center justify-center gap-3">
                            <Github />
                            Ver no Github
                        </Link>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}