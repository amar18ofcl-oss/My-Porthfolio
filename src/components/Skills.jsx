import { motion } from "framer-motion";

const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
    "Tailwind CSS", "Node.js", "Express", "PostgreSQL",
    "Git", "Docker", "Figma", "Framer Motion", "GraphQL"
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Tech Stack
                </motion.h2>
                <p className="text-muted-foreground">The technologies I use to build amazing things.</p>
            </div>

            {/* Marquee Effect */}
            <div className="flex relative overflow-hidden group">
                <div className="flex gap-8 animate-loop-scroll group-hover:paused w-max">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 rounded-full border border-border bg-card/50 text-card-foreground font-medium text-lg whitespace-nowrap hover:border-primary hover:text-primary transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <div className="flex gap-8 animate-loop-scroll group-hover:paused w-max absolute top-0 left-full pl-8" aria-hidden="true">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 rounded-full border border-border bg-card/50 text-card-foreground font-medium text-lg whitespace-nowrap hover:border-primary hover:text-primary transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Add custom animation for marquee if not in tailwind config */}
            <style>{`
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-loop-scroll {
          animation: loop-scroll 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
