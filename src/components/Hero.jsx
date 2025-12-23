import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "../assets/my photo.jpeg";
import resume from "../assets/amaresh.pdf";

export default function Hero() {
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-75" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for work
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Hi, I'm Amaresh M <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                            Front End Developer
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                        I am a Front End Developer. I have a Good understanding of HTML, CSS flex layout concepts.
                        Motivated and analytical person seeking to work at your organization.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href={resume}
                            download="Amaresh_Resume"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border"
                        >
                            Resume <Download className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Hero Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
                        <div className="absolute inset-0 bg-card border border-border rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                            <img
                                src={profilePhoto}
                                alt="Amaresh M"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
