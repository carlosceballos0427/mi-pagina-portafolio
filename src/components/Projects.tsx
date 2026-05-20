import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Calendar, Filter, Sparkles, Database, Laptop, ShieldCheck, Cpu } from 'lucide-react';
import type { Project } from '../data/projects';

// Category map helpers
const PROJECT_CATEGORIES = {
  All: "Todos",
  IABi: "IA & BI/Big Data",
  Web: "Desarrollo Web",
  Erp: "ERP & Gestión"
};

type CategoryKey = keyof typeof PROJECT_CATEGORIES;

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("All");

  // Determine if project belongs to category
  const belongsToCategory = (project: Project, category: CategoryKey): boolean => {
    const titleLower = project.title.toLowerCase();
    const techLower = project.tech.map(t => t.toLowerCase());

    if (category === "All") return true;
    
    if (category === "IABi") {
      return (
        titleLower.includes("secop") || 
        titleLower.includes("control") || 
        techLower.includes("openai api") || 
        techLower.includes("django rest") ||
        techLower.includes("bi")
      );
    }
    
    if (category === "Web") {
      return (
        techLower.includes("astro") || 
        techLower.includes("react") || 
        techLower.includes("angular") || 
        techLower.includes("flask")
      );
    }
    
    if (category === "Erp") {
      return (
        titleLower.includes("control") || 
        titleLower.includes("ferretic") || 
        titleLower.includes("feliz")
      );
    }
    
    return false;
  };

  const filteredProjects = projects.filter(p => belongsToCategory(p, activeCategory));

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4">
      
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 bg-white/5 border border-white/5 p-1.5 rounded-2xl max-w-lg mx-auto backdrop-blur-md">
        {(Object.keys(PROJECT_CATEGORIES) as CategoryKey[]).map((catKey) => (
          <button
            key={catKey}
            onClick={() => setActiveCategory(catKey)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeCategory === catKey
                ? 'bg-brand-primary text-slate-950 font-bold shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {PROJECT_CATEGORIES[catKey]}
          </button>
        ))}
      </div>

      {/* Projects Grid Container with AnimatePresence */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-morphism rounded-3xl p-6 flex flex-col justify-between h-full hover:border-brand-primary/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.25)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Highlight background glow on card hover */}
              <div className="absolute -inset-x-20 -inset-y-20 -z-10 bg-gradient-to-r from-brand-primary/0 via-brand-secondary/5 to-brand-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl blur-2xl"></div>

              <div>
                {/* Header Tag and Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg flex items-center gap-1.5 ${
                    project.type === 'Recent' 
                      ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20' 
                      : 'bg-zinc-800/40 text-zinc-400 border border-zinc-800'
                  }`}>
                    {project.type === 'Recent' ? (
                      <>
                        <Sparkles className="w-3 h-3" />
                        <span>Destacado</span>
                      </>
                    ) : (
                      <span>Hito 2022</span>
                    )}
                  </span>
                  
                  <div className="flex items-center gap-1 text-zinc-500 text-xs font-mono">
                    <Calendar size={13} className="text-zinc-500" />
                    {project.year}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 group-hover:text-brand-primary transition-colors text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies and Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] sm:text-xs text-zinc-300 font-semibold tracking-wide hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-primary font-bold hover:gap-2.5 transition-all text-xs sm:text-sm cursor-pointer"
                    >
                      <span>{project.title.includes("SECOP") ? "Ver sitio web" : "Ver en GitHub"}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-500 font-medium italic">Acceso restringido (Intranet)</span>
                  )}
                  
                  {/* Small capability indicators based on project tech */}
                  <div className="flex gap-1.5 text-zinc-600">
                    {project.tech.includes("OpenAI API") && <Cpu size={14} title="Integración con IA" className="text-brand-primary" />}
                    {(project.tech.includes("Django REST") || project.tech.includes("SQLite")) && <Database size={14} title="Gestión de Datos" className="text-brand-secondary" />}
                    {project.title.includes("UAG") && <Laptop size={14} title="Cliente de Escritorio" className="text-brand-tertiary" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
