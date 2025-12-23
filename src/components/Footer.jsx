import { Github, Linkedin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Portfolio.</h3>
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Amaresh M. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/amar18ofcl-oss" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/amaresh-frontend" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://wa.me/919786967230" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Phone className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
