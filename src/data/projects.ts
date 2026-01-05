export interface Project {
  title: string;
  description: string;
  year: number;
  tech: string[];
  link?: string;
  type: '2022' | 'Recent';
}

export const projects: Project[] = [
  {
    title: "Buscador Inteligente de Contratos",
    description: "Plataforma avanzada que utiliza IA para optimizar la búsqueda y análisis de contratos públicos en el SECOP de Colombia. Transforma datos complejos en visualizaciones estratégicas.",
    year: 2025,
    tech: ["Python", "Flask", "OpenAI API", "Tailwind CSS"],
    link: "https://buscador-secop.onrender.com/",
    type: "Recent"
  },
  {
    title: "Cookiescan - Boilerplate SEO",
    description: "Estructura base optimizada para sitios web con enfoque en SEO y rendimiento. Incluye integración con Google Apps Script y WhatsApp.",
    year: 2025,
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/carlosceballos0427/cookiesscan",
    type: "Recent"
  },
  {
    title: "Ferretic - ERP Ferretero",
    description: "Sistema integral de gestión de inventarios, ventas y compras. Originalmente desarrollado en 2022 y modernizado con una interfaz premium y analítica de datos.",
    year: 2022,
    tech: ["Django", "Angular", "PrimeNG", "SQLite"],
    link: "https://github.com/carlosceballos0427/ferretic",
    type: "2022"
  },
  {
    title: "Mascota Feliz",
    description: "Aplicación pionera para la gestión de servicios veterinarios. Enfocada en la automatización de procesos clínicos y administrativos.",
    year: 2022,
    tech: [".NET Core", "C#", "SQL Server", "Bootstrap"],
    link: "https://github.com/carlosceballos0427/Mascota feliz",
    type: "2022"
  }
];
