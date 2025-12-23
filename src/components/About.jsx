import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

export default function About() {
    const cards = [
        {
            icon: <Code className="w-6 h-6 text-blue-500" />,
            title: "Clean Code",
            description: "Writing scalable, maintainable, and efficient code is my priority."
        },
        {
            icon: <Palette className="w-6 h-6 text-purple-500" />,
            title: "UI/UX Design",
            description: "Pixels matter. I strive for pixel-perfect implementation of designs."
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            title: "Performance",
            description: "Optimizing for speed and accessibility is key to user retention."
        }
    ];

    return (
        <section id="about" className="py-20 relative bg-muted/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm a passionate developer who loves to create beautiful interfaces and digital products.
                        With a background in design and engineering, I bring a unique perspective to every project.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="mb-4 p-3 rounded-xl bg-background w-fit border border-border">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                            <p className="text-muted-foreground">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
