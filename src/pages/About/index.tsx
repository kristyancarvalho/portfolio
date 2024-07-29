import { motion } from "framer-motion";

import { NavigationBar } from "../../components/navigation";
import { Footer } from "@/components/footer";
import { Technologies } from "../../components/technologies";

export function AboutPage() {
    return (
        <div>
            <NavigationBar />
            <main className="container flex w-screen py-28 flex-col gap-8 lg:px-36">
                <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -30 }}       
                    transition={{ delay: 0.8, type: "spring", duration: 5 }}
                    className="flex justify-center items-center"
                >
                    <img src="/laptop.png" alt="laptop" className="max-h-screen-sm max-w-screen-sm lg:max-h-64 min-[320px]:max-h-56"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 0}}
                    animate={{ opacity: 1, y: 15}}
                    transition={{ type: "just", duration: 2 }}
                    className="flex-col items-end"
                >
                    <div id="text"
                        className=""
                    >
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: "just", duration: 0.5 }}
                            className="flex"
                        >
                            <code className="text-3xl px-2 py-1 mb-4 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                                /sobre mim
                            </code>
                        </motion.span>
                        <div className="flex flex-col gap-6 text-lg text-neutral-500/80">
                            <motion.p 
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 0.5, type: "just", duration: 0.5 }}
                                className="px-3"
                            >
                               Olá! Sou Kristyan, um dedicado Desenvolvedor Fullstack com uma paixão por criar aplicações web elegantes e eficientes. Minha jornada na tecnologia começou em São Paulo, onde a curiosidade e a criatividade despertaram meu interesse pelo desenvolvimento de software. Ao longo dos anos, aperfeiçoei minhas habilidades em tecnologias de front-end e back-end, sempre me esforçando para criar experiências de usuário perfeitas e funcionalidades robustas.
                            </motion.p>

                            <motion.code
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 0.8, type: "just", duration: 0.5 }}
                            >
                                <code className="text-2xl px-2 py-1 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                                    Minha jornada
                                </code>
                            </motion.code>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 1, type: "just", duration: 0.5 }}
                                className="px-3"
                            >
                                Cresci em São Paulo, onde sempre fui fascinado por como as coisas funcionam. Essa curiosidade me levou a mergulhar na programação e tecnologia. Através de autoestudo, cursos online e projetos do mundo real, desenvolvi uma base sólida em engenharia de software.
                            </motion.p>
                            <motion.span
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 1.2, type: "just", duration: 0.5 }}
                            >
                                <code className="text-2xl px-2 py-1 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                                    Interesses Pessoais
                                </code>
                            </motion.span>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 1.4, type: "just", duration: 0.5 }}
                                className="px-3"
                            >
                                Além de programar, adoro assistir filmes e documentários, o que me ajuda a manter uma mentalidade equilibrada e criativa, essas atividades refrescam minha perspectiva e inspiram soluções inovadoras no meu trabalho.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
                </div>
                <Technologies />
           </main>
            <Footer />
        </div>
    )
}