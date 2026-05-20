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
    title: "Buscador Inteligente de Contratos (Buscador SECOP)",
    description: "Plataforma de inteligencia contractual que optimiza la búsqueda de licitaciones y contratos en SECOP I, II y Tienda Virtual del Estado Colombiano. Validador real con +570 clics y 22.1K impresiones en Google Search Console (Posición media 7.4). Integra IA para análisis rápido de términos de referencia.",
    year: 2026,
    tech: ["Astro", "React", "Python", "Flask", "OpenAI API", "Tailwind CSS", "SEO"],
    link: "https://www.buscadorsecop.com/",
    type: "Recent"
  },
  {
    title: "UAG Control - ERP de Seguimiento Contractual",
    description: "Sistema cliente-servidor optimizado para red local y de escritorio desarrollado para la Unidad Administrativa de Gestión (UAG). Automatiza el control financiero de contratos, adiciones, y cuentas de cobro. Cuenta con un dashboard de analíticas interactivo, importación inteligente de planillas Excel y control de accesos cifrado.",
    year: 2025,
    tech: ["React", "Vite", "Django REST", "SQLite", "Tailwind CSS", "Excel Parsing"],
    link: "https://github.com/carlosceballos0427/UAG---CONTROL",
    type: "Recent"
  },
  {
    title: "Cookiescan - Boilerplate SEO & Speed",
    description: "Boilerplate base para desarrollo web premium optimizado en velocidad y SEO. Cuenta con integraciones robustas de bases de datos de Google Sheets (a través de Google Apps Script) y canalizaciones automáticas de WhatsApp para optimizar embudos de ventas.",
    year: 2025,
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "Apps Script"],
    link: "https://github.com/carlosceballos0427/cookiesscan",
    type: "Recent"
  },
  {
    title: "Ferretic - ERP Comercial Ferretero",
    description: "Sistema de facturación, compras y control de inventarios. Creado en 2022 y actualizado con una arquitectura limpia para soportar reportes comerciales analíticos e interfaz intuitiva de escritorio.",
    year: 2022,
    tech: ["Django", "Angular", "PrimeNG", "SQLite"],
    link: "https://github.com/carlosceballos0427/ferretic",
    type: "2022"
  },
  {
    title: "Mascota Feliz - Gestión Veterinaria",
    description: "Aplicación clínica para la administración y automatización de citas, historias clínicas veterinarias, y control de dueños de mascotas. Diseñado para simplificar procesos administrativos médicos.",
    year: 2022,
    tech: [".NET Core", "C#", "SQL Server", "Bootstrap"],
    link: "https://github.com/carlosceballos0427/MascotaFelizAPP",
    type: "2022"
  }
];
