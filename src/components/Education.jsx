import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
    {
        degree: "Bsc, Computer Science (70%)",
        school: "Jaya College of Arts & Science",
        period: "06/2022 - 04/2025",
        description: "Specialized in Computer Science fundamentals."
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-muted/20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Education</h2>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block shadow-sm" />

                            <div className="flex-1"></div>
                            <div className="flex-1 pl-12 md:pl-0">
                                <div className={`p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                                    }`}>
                                    {/* Mobile Dot */}
                                    <div className="absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 md:hidden" />

                                    <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                                        <GraduationCap className="w-4 h-4" />
                                        {edu.school}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                        <Calendar className="w-4 h-4" />
                                        {edu.period}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
