import { CodeIcon, LayoutIcon, FileJsonIcon, FileCode2Icon, TerminalIcon, DatabaseIcon, BrainCircuitIcon, ServerCogIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map textual icon names from data.md to lucide components
const iconMap = {
    CodeIcon: CodeIcon,
    LayoutIcon: LayoutIcon,
    FileJsonIcon: FileJsonIcon,
    FileCode2Icon: FileCode2Icon,
    TerminalIcon: TerminalIcon,
    DatabaseIcon: DatabaseIcon,
    BrainCircuitIcon: BrainCircuitIcon,
    ServerCogIcon: ServerCogIcon
};

export const TechStack = () => {
    const { skills } = portfolioData;

    return (
        <section className="scroll-mt-30 space-y-8" id="skills">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Tecnologías</h2>
                <div className="h-px flex-1 bg-linear-to-r from-slate-800 to-transparent ml-8"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, idx) => {
                    const IconComponent = iconMap[skill.icon] || CodeIcon;

                    return (
                        <div key={idx} className="glass-panel p-5 rounded-xl hover:bg-white/5 transition-all group flex flex-col items-center gap-3 text-center border-t border-t-white/10 hover:border-primary/50">
                            <div className={`p-3 rounded-lg bg-slate-900/50 ${skill.colorClass} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                                <IconComponent size={32} strokeWidth={1.5} />
                            </div>
                            <span className="font-semibold text-slate-200">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
