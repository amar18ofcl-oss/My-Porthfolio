import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Tremor.",
        tags: ["Next.js", "React", "Tailwind CSS", "Tremor"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat interface powered by large language models. Features streaming responses and code syntax highlighting.",
        tags: ["React", "Socket.io", "OpenAI API", "Prisma"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?q=80&w=2666&auto=format&fit=crop"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website featuring dark mode, animations, and a clean UI.",
        tags: ["React", "Framer Motion", "Tailwind CSS"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on recently.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10 transition-all duration-300">
                                    <a href={project.links.demo} className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" title="View Demo">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <a href={project.links.code} className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" title="View Code">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
