import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, BarChart3, Database, Cpu, Globe, 
  Clock, ArrowUpRight, Code2, MapPin, CheckSquare, 
  Zap, Award, Users, ShieldAlert, MonitorCheck
} from 'lucide-react';

export const BentoGrid = () => {
  // Métricas reales de Buscador SECOP en Google Search Console (últimos 12 meses, captura del 10-oct-2026)
  const metrics = [
    { val: "5.46K", label: "Clics Totales", note: "orgánicos", color: "text-cyan-400" },
    { val: "234K", label: "Impresiones", note: "en Google", color: "text-indigo-400" },
    { val: "2.3%", label: "CTR Medio", note: "clics / impresiones", color: "text-emerald-400" },
    { val: "7.1", label: "Posición Media", note: "primera página", color: "text-amber-400" },
  ];

  // Curva de clics diarios (18-feb a 10-oct-2026) trazada de la gráfica real de Search Console.
  // Cada par es [x, fracción del pico]: x va de 0 a 360 (ancho del SVG); 1 = día pico (17-ago).
  const clicksCurve: Array<[number, number]> = [
    [0, 0], [40, 0.01], [70, 0.04], [100, 0.07], [130, 0.06], [160, 0.1], [190, 0.09], [215, 0.12],
    [235, 0.17], [250, 0.2], [258, 0.58], [265, 0.15], [271, 0.5], [277, 0.28], [281, 0.52],
    [286, 0.2], [289, 1], [293, 0.85], [297, 0.15], [301, 0.52], [306, 0.3], [311, 0.4],
    [316, 0.16], [321, 0.34], [327, 0.2], [333, 0.28], [340, 0.3], [346, 0.2], [352, 0.1], [360, 0.04],
  ];
  // Convierte la curva a coordenadas SVG (el eje Y crece hacia abajo; alto útil 70 sobre 80)
  const linePath = "M " + clicksCurve.map(([x, f]) => `${x} ${(76 - f * 68).toFixed(1)}`).join(" L ");
  // El área rellena cierra la línea por la base para pintar el degradado
  const areaPath = `${linePath} L 360 80 L 0 80 Z`;

  // Stack tools
  const techStack = [
    { name: "IA & Backend", icon: <Cpu className="w-4 h-4 text-cyan-400" />, items: ["Python", "Flask", "Django REST", "OpenAI API", "SQLite", "SQL Server"] },
    { name: "Frontend & UI", icon: <Code2 className="w-4 h-4 text-indigo-400" />, items: ["Astro", "React", "TypeScript", "Tailwind CSS", "Angular", "Vite"] },
    { name: "Data & BI", icon: <Database className="w-4 h-4 text-emerald-400" />, items: ["Power BI", "Excel Avanzado", "ETL", "Modelado SQL", "Analítica Financiera"] }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,_auto)]">
        
        {/* Card 1: Bio / Hybrid Profile (Wide 2 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 glass-morphism rounded-3xl p-6 flex flex-col justify-between group hover:border-brand-primary/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
              <Zap className="w-4 h-4 text-brand-primary" />
              <span>Enfoque Híbrido</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-brand-primary transition-colors">
              Optimización, Datos e Inteligencia Artificial
            </h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
              Como Ingeniero Industrial y Especialista en BI, veo el software no solo como código, sino como un medio para eficientar operaciones. Desarrollo aplicaciones automatizadas con IA e interfaces analíticas robustas que resuelven problemas de negocio reales, desde el seguimiento presupuestal hasta la simplificación de compras estatales.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 mt-6">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">03</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-medium">Títulos Académicos</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">+10.5B</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-medium">Presupuesto Controlado</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">5.4K</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-medium">Clics en Google (12 m)</div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Geo / Timezone & Availability (1 col) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-morphism rounded-3xl p-6 flex flex-col justify-between hover:border-brand-secondary/30 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-28 h-28 bg-brand-secondary/10 blur-xl rounded-full"></div>
          
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-brand-secondary/10 rounded-2xl text-brand-secondary">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Disponible
            </span>
          </div>

          <div className="space-y-2 mt-8">
            <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Ubicación
            </div>
            <div className="text-lg font-bold text-white font-heading">Cali, Colombia</div>
            <p className="text-xs text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-secondary" /> UTC-5 (Trabajo Remoto & Presencial)
            </p>
          </div>
        </motion.div>

        {/* Card 3: Google Search Console Widget (Wide 2 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 glass-morphism rounded-3xl p-6 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <TrendingUp className="w-4 h-4 text-brand-primary animate-pulse" />
                  <span>Logros de SEO & Tráfico Orgánico</span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading">buscadorsecop.com en Search Console</h4>
              </div>
              <span className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-zinc-400 font-medium">
                Últimos 12 meses
              </span>
            </div>

            {/* Métricas reales de Search Console (una tarjeta por métrica) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 my-4">
              {/* Recorre las 4 métricas para pintar cada tarjeta */}
              {metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-2xl border border-white/5 bg-white/[0.02] text-left">
                  <div className="text-xs text-zinc-500 font-medium truncate">{m.label}</div>
                  <div className={`text-xl font-bold font-heading mt-1 ${m.color}`}>{m.val}</div>
                  <div className="text-[9px] text-zinc-500 mt-0.5 font-mono">{m.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SVG Line Graph simulating GSC traffic */}
          <div className="relative h-24 w-full bg-slate-950/40 border border-white/5 rounded-2xl overflow-hidden mt-2 p-1">
            <svg viewBox="0 0 360 80" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="360" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="40" x2="360" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="60" x2="360" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              
              {/* Área bajo la curva real de clics (aparece con fundido) */}
              <motion.path
                d={areaPath}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                fill="url(#chartGradient)"
              />
              {/* Línea de la curva: se dibuja de izquierda a derecha con pathLength */}
              <motion.path
                d={linePath}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="absolute top-2 left-3 text-[9px] font-mono text-zinc-500">Clics diarios · feb–oct 2026 · pico el 17 de agosto</div>
          </div>
        </motion.div>

        {/* Card 4: Tech Stack (1 col, high row span) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:row-span-2 glass-morphism rounded-3xl p-6 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-secondary">
              <Award className="w-4 h-4 text-brand-secondary" />
              <span>Mi Arsenal Tecnológico</span>
            </div>
            
            <div className="space-y-4 pt-2">
              {techStack.map((stack) => (
                <div key={stack.name} className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-semibold uppercase tracking-wider">
                    {stack.icon}
                    <span>{stack.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {stack.items.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-zinc-400 font-medium hover:text-white hover:bg-brand-primary/15 hover:border-brand-primary/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 mt-4 text-[10px] text-zinc-500 italic">
            * Actualizando activamente stack hacia integraciones avanzadas de Agentes de IA.
          </div>
        </motion.div>

        {/* Card 5: Achievements Grid Widget - UAG Control Dashboard Highlights (1 col) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-morphism rounded-3xl p-6 flex flex-col justify-between hover:border-brand-tertiary/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-tertiary mb-3">
              <MonitorCheck className="w-4 h-4 text-brand-tertiary" />
              <span>Software de Escritorio</span>
            </div>
            <h4 className="text-base font-bold text-white font-heading mb-1.5">UAG Control ERP</h4>
            <p className="text-xs text-zinc-400 leading-normal">
              14 Procesos contractuales gestionados y optimizados bajo red local con visualización de avance y saldos automáticos.
            </p>
          </div>
          
          <div className="flex items-center gap-2 pt-3 border-t border-white/5 mt-3">
            <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold rounded-md">
              Dashboard Activo
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">React + Django</span>
          </div>
        </motion.div>

        {/* Card 6: Academic & Analytics Hobbies (1 col) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-morphism rounded-3xl p-6 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
              <BarChart3 className="w-4 h-4 text-brand-primary" />
              <span>Enfoque de Negocios</span>
            </div>
            <h4 className="text-base font-bold text-white font-heading mb-1.5">BI & Operaciones</h4>
            <p className="text-xs text-zinc-400 leading-normal">
              Especializado en traducir datos masivos de negocio (ETLs, Big Data) a reportes estructurados que agilizan las decisiones de gerencia.
            </p>
          </div>
          
          <div className="text-[10px] text-zinc-500 font-mono flex items-center justify-between mt-3 pt-3 border-t border-white/5">
            <span>SQL / Python BI</span>
            <span>Power BI</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
