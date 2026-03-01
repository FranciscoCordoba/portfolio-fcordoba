import { ArrowRight, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
    const { hero } = portfolioData;

    return (
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 pb-16">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5 w-fit">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{hero.subtitle}</span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tight">
                        {hero.title.part1} <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary text-glow">
                            {hero.title.part2}
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-lg leading-relaxed pt-4">
                        {hero.description}
                    </p>
                </div>

                <ImageHero visibility="block lg:hidden" />

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#projects" className="h-12 px-8 rounded-lg bg-primary text-background font-bold text-base hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center cursor-pointer">
                        {hero.buttons.primary}
                    </a>
                    <a href="#contact" className="h-12 px-8 rounded-lg border border-slate-700 hover:border-slate-500 bg-transparent text-white font-medium text-base hover:bg-white/5 transition-all flex items-center gap-2 group cursor-pointer">
                        {hero.buttons.secondary}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Ocultamos el div y su gradiente en mobile para no ocupar espacio invisible en la grilla */}
            <div className="relative hidden lg:flex order-1 lg:order-2 justify-center">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 blur-[80px] rounded-full"></div>
                <ImageHero visibility="hidden lg:block" />
            </div>
        </section>
    );
    function ImageHero({ visibility }) {
        return (
            <div className={`${visibility} glass-panel rounded-2xl p-2 mx-auto w-full max-w-[400px] aspect-square rotate-3 hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-50"></div>
                <div
                    className="w-full h-full rounded-xl bg-center bg-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    aria-label="Abstract code background theme"
                >
                    <img src={hero.abstractImage} className="w-full h-full object-cover" alt="Una computadora con codigo" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-lg p-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-bold text-sm">Enfoque Actual</h3>
                        <p className="text-xs text-slate-400">React y Desarrollo Web Moderno</p>
                    </div>
                    <div className="size-10 rounded-full bg-black/50 flex items-center justify-center text-primary">
                        <Code size={20} />
                    </div>
                </div>
            </div>
        )
    }
};
