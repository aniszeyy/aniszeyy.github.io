// Contenu du site — une seule source de vérité.
// Les projets sont repris du compte GitHub @aniszeyy (dépôts publics, nov. 2026).

export const siteConfig = {
  language: 'fr',
  title: 'Anis Zamoum — Développeur multiplateforme',
  description:
    "Portfolio d'Anis Zamoum, développeur multiplateforme à Tizi Ouzou : React et TypeScript, Java, .NET, bases de données et administration système.",
  url: 'https://aniszeyy.github.io',
  github: 'https://github.com/aniszeyy',
  email: 'aniszamoumm@gmail.com',
  location: 'Tizi Ouzou, Algérie',
};

export const navigationConfig = {
  logo: 'AZ',
  links: [
    { label: 'Travaux', href: '#work' },
    { label: 'À propos', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ],
  contactLabel: 'Me contacter',
  contactHref: 'mailto:aniszamoumm@gmail.com',
};

export const heroConfig = {
  kicker: 'Portfolio — 2026',
  name: ['Anis', 'Zamoum'],
  role: 'Développeur multiplateforme',
  intro:
    "Je conçois des applications web, desktop et back-end — de l’interface React au schéma de base de données.",
  availability: 'Disponible pour missions freelance',
  meta: [
    { label: 'Basé à', value: 'Tizi Ouzou, DZ' },
    { label: 'Depuis', value: '2020' },
    { label: 'Dépôts publics', value: '12' },
  ],
};

export interface Project {
  name: string;
  repo: string;
  year: string;
  category: 'Web' | 'Desktop' | 'Java';
  summary: string;
  stack: string[];
  lang: string;
  langColor: string;
  motif: 'stripes' | 'grid' | 'rings' | 'bars' | 'dots';
  featured?: boolean;
}

export const projectsConfig: Project[] = [
  {
    name: 'Gaming Marketplace',
    repo: 'gaming-marketplace',
    year: '2026',
    category: 'Web',
    summary:
      "Marketplace de comptes de jeux : catalogue filtrable, pagination et API REST (GET/POST) adossée à MySQL. Interface Next.js App Router avec shadcn/ui.",
    stack: ['Next.js 15', 'TypeScript', 'MySQL', 'Tailwind'],
    lang: 'TypeScript',
    langColor: '#3178c6',
    motif: 'rings',
    featured: true,
  },
  {
    name: 'Gestion Produit',
    repo: 'GESTION_Produit',
    year: '2026',
    category: 'Desktop',
    summary:
      "Application de bureau de gestion de produits et catégories : CRUD complet, DataGridView et accès ADO.NET déconnecté (DataSet + SqlCommandBuilder).",
    stack: ['C# 9', '.NET 6', 'WinForms', 'SQL Server'],
    lang: 'C# / .NET',
    langColor: '#68217a',
    motif: 'grid',
  },
  {
    name: 'JobConnect Platform',
    repo: 'JobConnect_Platform',
    year: '2026',
    category: 'Web',
    summary:
      'Mini-projet web en ASP.NET MVC : architecture Modèle-Vue-Contrôleur, vues Razor et interface responsive.',
    stack: ['ASP.NET MVC', 'C#', 'Razor', 'Bootstrap'],
    lang: 'C# / ASP.NET',
    langColor: '#68217a',
    motif: 'bars',
  },
  {
    name: 'Quatre jeux Java',
    repo: 'test-java-deploy',
    year: '2026',
    category: 'Java',
    summary:
      'Quatre mini-jeux pédagogiques — Labyrinthe, Snake, Tennis et Sudoku — avec boucles de jeu, dessin 2D et gestion des collisions.',
    stack: ['Java', 'Swing', 'Timer', 'KeyListener'],
    lang: 'Java',
    langColor: '#b07219',
    motif: 'dots',
  },
  {
    name: 'Portfolio personnel',
    repo: 'aniszeyy.github.io',
    year: '2026',
    category: 'Web',
    summary:
      "Ce site : grille éditoriale, filtres de projets, animations au scroll et contenu centralisé dans un fichier de configuration.",
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind'],
    lang: 'TypeScript',
    langColor: '#3178c6',
    motif: 'stripes',
  },
];

export interface ForkItem {
  name: string;
  repo: string;
  year: string;
  summary: string;
  stack: string;
}

export const forksConfig: ForkItem[] = [
  {
    name: 'PFE Chirurgie',
    repo: 'PFE_Chirurgie',
    year: '2026',
    summary: 'Gestion hospitalière : documents générés et accès patient par QR code.',
    stack: 'Java · Jakarta EE · MySQL',
  },
  {
    name: 'opencode',
    repo: 'opencode',
    year: '2026',
    summary: 'Agent de code open source — fork du dépôt officiel.',
    stack: 'TypeScript',
  },
  {
    name: 'openclaw',
    repo: 'openclaw',
    year: '2026',
    summary: 'Assistant IA personnel, multiplateforme — fork.',
    stack: 'TypeScript',
  },
  {
    name: 'system_prompts_leaks',
    repo: 'system_prompts_leaks',
    year: '2026',
    summary: 'Collection de prompts système de chatbots — fork.',
    stack: 'Markdown',
  },
  {
    name: 'AutoEcole',
    repo: 'AutoEcole',
    year: '2017',
    summary: "Projet web étudiant (3IL) : élèves, véhicules, leçons et examens.",
    stack: 'PHP · Oracle XE',
  },
];

export const aboutConfig = {
  lead: 'Développeur multiplateforme basé à Tizi Ouzou, en Algérie.',
  paragraphs: [
    "Je travaille des deux côtés de la stack : React et TypeScript pour les interfaces, Java et .NET pour le back-end et le desktop. Mon terrain de jeu : les applications qui doivent tourner partout, sans perdre en rigueur.",
    "J’aime les systèmes qui tiennent : un schéma de données propre, un serveur bien configuré (Arch Linux, Windows Server), une interface qui se lit sans mode d’emploi. Je développe aussi en freelance et je cherche des collaborations open source autour de Java et .NET.",
  ],
  facts: [
    { label: 'Localisation', value: 'Tizi Ouzou, Algérie' },
    { label: 'Statut', value: 'Freelance — disponible' },
    { label: 'Langues', value: 'Arabe, kabyle, français, anglais' },
    { label: 'Focus', value: 'Web · Desktop · Données · Systèmes' },
  ],
};

export const stackConfig = {
  groups: [
    {
      title: 'Interfaces',
      items: ['React 19', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'HTML5 / CSS3'],
    },
    {
      title: 'Back-end',
      items: ['Node.js', 'Express', 'J2EE · Servlet / JSP', 'ASP.NET MVC', 'PHP'],
    },
    {
      title: 'Desktop',
      items: ['C# / .NET', 'Windows Forms', 'Java Swing'],
    },
    {
      title: 'Données',
      items: ['SQL Server', 'MySQL', 'MongoDB', 'SQLite', 'Oracle'],
    },
    {
      title: 'Systèmes',
      items: ['Arch Linux', 'Windows Server 2022', 'VMware', 'Tomcat', 'XAMPP'],
    },
    {
      title: 'Outils',
      items: ['Git / GitHub', 'Figma', 'VS Code', 'Visual Studio'],
    },
  ],
};

export const contactConfig = {
  heading: 'Parlons de votre prochain projet.',
  text: "Une application à construire, une base de données à remettre d’aplomb ou une mission freelance ? Écrivez-moi — je réponds vite.",
  availability: 'Ouvert aux missions freelance et aux collaborations open source.',
};

export const footerConfig = {
  description:
    "Développeur multiplateforme à Tizi Ouzou. Web, desktop, données et systèmes — avec le souci du détail.",
  columns: [
    {
      title: 'Navigation',
      links: [
        { label: 'Travaux', href: '#work' },
        { label: 'À propos', href: '#about' },
        { label: 'Stack', href: '#stack' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Ailleurs',
      links: [
        { label: 'GitHub', href: 'https://github.com/aniszeyy' },
        { label: 'Tous les dépôts', href: 'https://github.com/aniszeyy?tab=repositories' },
        { label: 'Email', href: 'mailto:aniszamoumm@gmail.com' },
      ],
    },
  ],
  copyright: '© 2026 Anis Zamoum',
  credit: 'Conçu et codé à Tizi Ouzou.',
};
