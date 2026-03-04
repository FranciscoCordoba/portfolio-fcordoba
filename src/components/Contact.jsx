import { portfolioData } from '../data/portfolioData';
import Whatsapp from './icons/Whatsapp';

export const Contact = () => {
    const { contact } = portfolioData;

    return (
        <section className="scroll-mt-20 py-12" id="contact">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-110 h-110 bg-[radial-gradient(circle,rgba(6,182,212,0.07)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-110 h-110 bg-[radial-gradient(circle,rgba(139,92,246,0.07)_0%,transparent_70%)] rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                        ¿Listo para lanzar tu <br />próximo producto digital?
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Actualmente estoy disponible para proyectos freelance y abierto a nuevas oportunidades.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href={`https://wa.me/${contact.phone}?text=${contact.msg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 px-8 flex items-center justify-center gap-2 rounded-lg bg-white text-background font-bold text-base hover:bg-slate-200 transition-all w-full sm:w-auto"
                        >
                            <Whatsapp size={18} />
                            Hablemos
                        </a>
                        <a href={contact.cv} download target="_blank" rel="noopener noreferrer" className="h-12 px-8 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 text-white font-medium text-base transition-all w-full sm:w-auto cursor-pointer">
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
