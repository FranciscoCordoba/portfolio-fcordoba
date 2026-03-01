import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { header } = portfolioData;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center text-black font-bold font-display shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        <Code size={20} />
                    </div>
                    <h2 className="text-white text-xl font-display font-bold tracking-tight">{header.name}</h2>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-200" href="#projects">Proyectos</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-200" href="#skills">Habilidades</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-200" href="#contact">Contacto</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden sm:flex h-10 px-6 items-center justify-center rounded-full bg-transparent border border-slate-700 hover:border-slate-500 cursor-pointer text-white font-bold text-sm tracking-wide hover:bg-white/5 transition-all">
                        Contactame
                    </a>
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-t border-white/5 flex flex-col p-4 gap-4 animate-in fade-in slide-in-from-top-4">
                    <a className="block text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
                    <a className="block text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#skills" onClick={() => setIsOpen(false)}>Habilidades</a>
                    <a className="block text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
                </div>
            )}
        </header>
    );
};
