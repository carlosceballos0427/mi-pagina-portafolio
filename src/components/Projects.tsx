import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Calendar } from 'lucide-react';
import type { Project } from '../data/projects';

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-morphism rounded-2xl p-6 flex flex-col h-full hover:border-brand-primary/60 hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.3)] transition-all duration-500 group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${project.type === 'Recent' ? 'bg-brand-primary/20 text-brand-primary' : 'bg-zinc-800 text-zinc-400'
                            }`}>
                            {project.type === 'Recent' ? 'Reciente' : '2022'}
                        </span>
                        <div className="flex items-center gap-1 text-zinc-500 text-sm">
                            <Calendar size={14} />
                            {project.year}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-zinc-300">
                                {t}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.link || "#"}
                        className="flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
                    >
                        Ver detalles <ExternalLink size={16} />
                    </a>
                </motion.div>
            ))}
        </div>
    );
};
