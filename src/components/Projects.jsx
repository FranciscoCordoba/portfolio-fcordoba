import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section className="scroll-mt-30 space-y-12" id="projects">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Proyectos Destacados</h2>
                <p className="text-slate-400">Una selección de trabajos recientes entregando aplicaciones web modernas y de alto rendimiento.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group glass-panel rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                        <div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent z-10"></div>
                            <div
                                className="w-full h-full pt-10 flex items-end group-hover:scale-105 transition-transform duration-500"
                                aria-label={`Preview of ${project.title}`}
                            >
                                <img className='mx-auto w-auto h-full object-cover shadow-2xl shadow-white/80' src={project.image} alt={project.title} />
                            </div>
                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                                <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-slate-300 border border-white/10">
                                    {project.tag}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 space-y-4 relative z-20 -mt-12">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-slate-400 text-sm">{project.category}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="size-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(30,41,59,0.5)]"
                                        aria-label={`Code repo for ${project.title}`}
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="size-10 rounded-full bg-primary text-black hover:bg-cyan-400 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                        aria-label={`Live site for ${project.title}`}
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
