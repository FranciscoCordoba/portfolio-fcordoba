import { Code, Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
    const { contact, header } = portfolioData;

    return (
        <footer className="border-t border-white/5 bg-background/50 backdrop-blur-md mt-auto">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="size-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs font-display">
                            <Code size={16} />
                        </div>
                        <span className="text-slate-400 text-sm">© {(new Date()).getFullYear()} {header.name}. Todos los derechos reservados.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={`mailto:${contact.email}`}
                            className="text-slate-400 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2"
                        >
                            <Mail size={18} />
                        </a>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
