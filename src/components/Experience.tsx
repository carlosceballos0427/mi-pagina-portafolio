import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, GraduationCap, LineChart, Sparkles } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  type: 'academic' | 'work' | 'hybrid';
  color: string;
  icon: React.ReactNode;
}

export const Experience = () => {
  const timeline: TimelineItem[] = [
    {
      year: "2024 - Presente",
      title: "Ingeniería de Software & Soluciones de IA",
      subtitle: "Desarrollo Freelance & Proyectos Corporativos",
      description: "Diseño y despliegue de plataformas de alta velocidad e integraciones inteligentes con Modelos de Lenguaje (OpenAI API). Creador de Buscador SECOP (buscadorsecop.com), más de 5.400 clics y 234.000 impresiones en Google en 12 meses, con posición media 7,1. Desarrollo de automatizaciones y agentes analíticos.",
      skills: ["Astro / React / Django", "OpenAI API", "SEO & Performance", "Vite / Node.js"],
      type: "work",
      color: "border-brand-primary/50 text-brand-primary bg-brand-primary/10",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      year: "2018 - Presente",
      title: "Especialista en BI, Big Data & Gestión Contractual",
      subtitle: "Alcaldía de Cali · Departamento Administrativo de Hacienda (UAG)",
      description: "Analista financiero del equipo estructurador de procesos de licitación y contratación: presupuesto oficial, estudios de mercado y del sector, indicadores y verificación de capacidad financiera de proponentes, y revisión de coherencia económica entre procesos. Desarrollo de UAG Control para el control financiero de contratos, con tableros en Power BI y flujos ETL a SQL Server.",
      skills: ["Presupuesto Oficial", "Estudios de Mercado", "Capacidad Financiera", "SECOP II / CCE", "Power BI & SQL Server"],
      type: "hybrid",
      color: "border-brand-secondary/50 text-brand-secondary bg-brand-secondary/10",
      icon: <LineChart className="w-5 h-5" />
    },
    {
      year: "Formación",
      title: "Ingeniería Industrial y dos Especializaciones",
      subtitle: "Politécnico Grancolombiano · IEP (España) · Asturias",
      description: "Ingeniero Industrial con Especialización en Business Intelligence y Big Data (IEP, España) y en Inteligencia de Negocios (Asturias Corporación Universitaria). Base metodológica para optimizar operaciones y sustentar decisiones con datos.",
      skills: ["Optimización de Operaciones", "Gestión Financiera", "Business Intelligence", "Big Data"],
      type: "academic",
      color: "border-brand-tertiary/50 text-brand-tertiary bg-brand-tertiary/10",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Bullet Node with Glow */}
            <div className={`absolute -left-[35px] md:-left-[51px] top-1.5 p-2 rounded-xl border backdrop-blur-md transition-all duration-500 group-hover:scale-110 ${item.color}`}>
              {item.icon}
            </div>

            {/* Content Box */}
            <div className="glass-morphism rounded-3xl p-6 md:p-8 hover:border-white/15 transition-all duration-300 relative overflow-hidden">
              {/* Timeline background gradient */}
              <div className="absolute top-0 right-0 -translate-y-20 translate-x-20 w-44 h-44 bg-gradient-to-br from-white/5 to-transparent blur-2xl rounded-full"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border self-start md:self-center ${
                  item.type === 'work' 
                    ? 'bg-brand-primary/5 text-brand-primary border-brand-primary/20' 
                    : item.type === 'hybrid' 
                    ? 'bg-brand-secondary/5 text-brand-secondary border-brand-secondary/20' 
                    : 'bg-brand-tertiary/5 text-brand-tertiary border-brand-tertiary/20'
                }`}>
                  {item.type === 'work' ? 'Software & IA' : item.type === 'hybrid' ? 'BI & Datos' : 'Ingeniería'}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-zinc-300 mb-4">{item.subtitle}</h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">{item.description}</p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[10px] sm:text-xs px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-zinc-300 font-semibold tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
