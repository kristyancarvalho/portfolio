import { motion } from "framer-motion";

export function Technologies() {
    return (
        <div id="technologies" className="py-12 flex flex-col">
            <div>
            <motion.span 
                        initial={{ opacity: 0, y: 0}}
                        animate={{ opacity: 1, y: 15}}
                        transition={{ delay: 1.6, type: "just", duration: 0.5 }}
                >
                    <code className="text-3xl px-2 py-1 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                        /tecnologias
                    </code>
                </motion.span>
                <div className="flex lg:flex-row gap-8 mt-4 min-[320px]:flex-col">
                <motion.div
                        initial={{ opacity: 0, y: 0}}
                        animate={{ opacity: 1, y: 15}}
                        transition={{ delay: 1.8, type: "just", duration: 0.5 }}
                >
                    <code className="text-2xl px-2 py-1 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                        Desenvolvimento Front-End
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
                    <code className="text-2xl px-2 py-1 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                        Desenvolvimento Back-End
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
                    <code className="text-2xl px-2 py-1 text-neutral-500/80 bg-neutral-800/50 rounded-sm">
                        Ferramentas e Tecnologias
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
    );
}