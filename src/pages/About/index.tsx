import { motion } from "framer-motion";

import { Footer } from "@/components/footer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface AboutPageProps {
    theme: 'light' | 'dark';
}

export function AboutPage({ theme }: AboutPageProps) {
    return (
        <div className={`overflow-x-hidden transition-colors ${theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-200/50'}`}>
            <main className="container flex w-screen lg:py-28 min-[320px]:py-24 flex-col gap-8 lg:px-36">
                <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -30 }}       
                    transition={{ type: "spring", duration: 5 }}
                    className="flex justify-center items-center"
                >
                    <LazyLoadImage
                            src="/laptop.png"
                            effect="blur"
                            alt="laptop"
                            className="max-h-screen-sm max-w-screen-sm lg:max-h-64 min-[320px]:max-h-56"
                        />
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
                            transition={{ delay: 0.3, type: "just", duration: 0.5 }}
                            className="flex"
                        >
                            <code className={`text-3xl px-2 py-1 mb-4 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
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
                                <code className={`text-2xl px-2 py-1 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
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
                                <code className={`text-2xl px-2 py-1 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
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
                <div id="technologies" className="py-12 flex flex-col">
            <div>
                <motion.span 
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 1.6, type: "just", duration: 0.5 }}
                    >
                        <code className={`text-3xl px-2 py-1 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
                            /tecnologias
                        </code>
                    </motion.span>
                    <div className="flex lg:flex-row gap-8 mt-4 min-[320px]:flex-col">
                    <motion.div
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 1.8, type: "just", duration: 0.5 }}
                    >
                        <code className={`text-2xl px-2 py-1 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
                            Front-End
                        </code>
                        <motion.p
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 2, type: "just", duration: 0.5 }}
                            className="text-neutral-500/80"
                        >
                            <strong>Linguagens:</strong> HTML, CSS, JavaScript, TypeScript
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 2.2, type: "just", duration: 0.5 }}
                            className="text-neutral-500/80"
                        >
                            <strong>Frameworks/Bibliotecas:</strong> ReactJS, NextJS, Vite
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 2.4, type: "just", duration: 0.5 }}
                            className="text-neutral-500/80"
                        >
                            <strong>Estilização:</strong> Tailwind CSS, Styled-Components, Sass
                        </motion.p>
                    </motion.div>

                    <motion.div
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 2.6, type: "just", duration: 0.5 }}
                    >
                        <code className={`text-2xl px-2 py-1 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
                            Back-End
                        </code>
                        <motion.p
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 2.8, type: "just", duration: 0.5 }}
                            className="text-neutral-500/80"
                        >
                            <strong>Linguagens:</strong> Typescript, Javascript
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 3, type: "just", duration: 0.5 }}
                            className="text-neutral-500/80"
                        >
                            <strong>Frameworks:</strong> Express, Fastify
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 0}}
                            animate={{ opacity: 1, y: 15}}
                            transition={{ delay: 3.2, type: "just", duration: 0.5 }}
                            className="text-neutral-500/80"
                        >
                            <strong>Bancos de Dados:</strong> MongoDB, Firebase, SQlite
                        </motion.p>
                    </motion.div>
                        <motion.div
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 3.4, type: "just", duration: 0.5 }}
                        >
                            <code className={`text-2xl px-2 py-1 ${theme === 'dark' ? 'text-neutral-500/80 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm`}>
                                Ferramentas
                            </code>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 3.6, type: "just", duration: 0.5 }}
                                className="text-neutral-500/80"
                            >
                                <strong>Controle de Versão:</strong> Git, GitHub
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 3.8, type: "just", duration: 0.5 }}
                                className="text-neutral-500/80"
                            >
                                <strong>CI/CD:</strong> GitHub Actions
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 4.0, type: "just", duration: 0.5 }}
                                className="text-neutral-500/80"
                            >
                                <strong>ORM:</strong> Prisma
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 4.2, type: "just", duration: 0.5 }}
                                className="text-neutral-500/80"
                            >
                                <strong>Testes:</strong> Jest
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 0}}
                                animate={{ opacity: 1, y: 15}}
                                transition={{ delay: 4.4, type: "just", duration: 0.5 }}
                                className="text-neutral-500/80"
                            >
                                <strong>Containerização:</strong> Docker, Kubernetes
                            </motion.p>
                        </motion.div>
                    </div>        
                </div>
            </div>
 
           </main>
            <Footer theme={theme} />
        </div>
    )
}