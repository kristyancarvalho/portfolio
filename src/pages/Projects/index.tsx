import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Chrome, Monitor, Smartphone, SquareTerminalIcon} from "lucide-react";
import { ProjectCard } from "../../components/ProjectsCard";

interface ProjectsPageProps {
    theme: 'light' | 'dark';
}

export function ProjectsPage({ theme }: ProjectsPageProps) {
    const projects = [
        {
            title: "Happy",
            description: "Happy mostra localização de orfanatos próximos abertos para visitação.",
            imageSrc: "/Happy.png",
            githubLink: "https://github.com/kristyancarvalho/Happy",
            platforms: [Chrome, Smartphone],
        },
        {
            title: "Paint",
            description: "App desktop para desenhar desenvolvido em ElectronJS, ReactJS e MaterialUI.",
            imageSrc: "/Paint.png",
            githubLink: "https://github.com/kristyancarvalho/paint-desktop-app",
            platforms: [Monitor],
        },
        {
            title: "Salotti Run",
            description: "Salotti Run é um jogo do gênero runner endless para culminância de 2023.",
            imageSrc: "/SalottiRun.png",
            githubLink: "https://github.com/kristyancarvalho/salotti-run-game?tab=readme-ov-file",
            platforms: [Chrome],
        },
        {
            title: "LetMeAsk",
            description: "Crie salas para responder ou para fazer perguntas ao vivo durante uma live.",
            imageSrc: "/Letmeask.png",
            githubLink: "https://github.com/kristyancarvalho/Letmeask",
            platforms: [Chrome],
        },        {
            title: "MoveIt",
            description: "Temporizador pomodoro gamificado. Desenvolvido em NextJS e Typescript durante o NLW 4.",
            imageSrc: "/MoveIt.png",
            githubLink: "https://github.com/kristyancarvalho/MoveIt",
            platforms: [Chrome],
        },
        {
            title: "Paralelismo",
            description: "Benchmark comparativo entre processamento de imagens em single thread e Worker Threads.",
            imageSrc: "/Benchmark.png",
            githubLink: "https://github.com/kristyancarvalho/multi-thread-image-processing",
            platforms: [SquareTerminalIcon],
        },          {
            title: "C# Snake",
            description: "Jogo da cobrinha que roda no terminal. Projeto didático que fiz enquanto aprendia C#.",
            imageSrc: "/SnakeGame.png",
            githubLink: "https://github.com/kristyancarvalho/terminal-snake-game",
            platforms: [SquareTerminalIcon],
        },        {
            title: "Plann.er API",
            description: "API do Plann.er, aplicação de planejamento de viagem. NLW Journey 2024.",
            imageSrc: "/Planner.png",
            githubLink: "https://github.com/kristyancarvalho/plann.er-backend",
            platforms: [Chrome],
        },
    ];

    return (
        <div className={`overflow-x-hidden transition-colors ${theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-200/50'}`}>
            <main className="container w-full lg:py-32 min-[320px]:py-24 px-4 lg:px-36">
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "just", duration: 0.5 }}
                    className="flex"
                >
                    <code className={`text-3xl px-2 py-1 mb-4 ${theme === 'dark' ? 'text-neutral-500 bg-neutral-800/50' : 'text-neutral-500 bg-neutral-800/20'} rounded-sm overflow-hidden`}>
                        /projetos
                    </code>
                </motion.span>
                <div id="projects" className="py-6 w-full">
                    <div className="grid grid-cols-1 min-[320px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0,  y: -20, scale: 0 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.15 * (index + 2), type: "spring", duration: 2}}
                            >
                                <ProjectCard theme={theme} {...project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer theme={theme}/>
        </div>
    )
}