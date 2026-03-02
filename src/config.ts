// Site configuration
// Anis Zamoum - Multiplatform Developer Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Anis Zamoum | Multiplatform Developer",
  description: "Multiplatform Developer from Tizi Ouzou, Algeria. Expert in Java, .NET, React, and System Administration.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Anis Zamoum",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  contactLabel: "Contact Me",
  contactHref: "mailto:aniszamoumm@gmai.com",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Anis Zamoum",
  roles: [
    "Multiplatform Developer",
    "System Administrator",
    "Full-Stack Engineer",
    "Database Expert",
  ],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  stats: AboutStat[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "Multiplatform developer based in Tizi Ouzou, Algeria with expertise in both Java and .NET ecosystems. Passionate about system administration and creating robust cross-platform solutions. I specialize in building applications that work seamlessly across different platforms, with extensive experience in database management and server configuration. Currently expanding my knowledge in cloud computing and DevOps.",
  stats: [
    { value: "7+", label: "Programming Languages" },
    { value: "4", label: "Database Systems" },
    { value: "4", label: "Languages Spoken" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Can Do For You",
  services: [
    {
      iconName: "Code",
      title: "Full-Stack Development",
      description: "Building complete web applications using React.js, Node.js/Express.js, J2EE, ASP.NET, and PHP. From frontend UI to backend APIs, I deliver end-to-end solutions.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Database",
      title: "Database Management",
      description: "Expert in MS SQL, MySQL, MongoDB, and SQLite3. I design efficient database schemas, optimize queries, and ensure data integrity for your applications.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Server",
      title: "System Administration",
      description: "Proficient in Arch Linux setup, Windows Server 2022 configuration, and VMware virtualization. I maintain and optimize server environments for peak performance.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Monitor",
      title: "Cross-Platform Apps",
      description: "Developing applications using C#, Java, React.js that work seamlessly across different platforms. Create once, deploy everywhere with consistent user experience.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Featured Projects",
  description: "A selection of my recent work showcasing expertise in cross-platform development, database management, and system administration.",
  projects: [
    {
      title: "Cross-Platform Applications",
      category: "Full-Stack Development",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "Database Management Systems",
      category: "Database Architecture",
      year: "2024",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Server Configuration",
      category: "System Administration",
      year: "2023",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Java EE Enterprise Solutions",
      category: "Backend Development",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Full-Stack Web Applications",
      category: "Web Development",
      year: "2024",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Let's Work Together",
    heading: "Have a project in mind?",
    linkText: "Get in Touch",
    linkHref: "mailto:aniszamoumm@gmai.com",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Anis delivered an exceptional cross-platform solution that exceeded our expectations. His expertise in both Java and .NET ecosystems was evident throughout the project.",
      author: "Sarah Mitchell",
      role: "CTO",
      company: "TechVentures Inc.",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Working with Anis was a pleasure. His system administration skills helped us optimize our server infrastructure significantly. Highly recommended!",
      author: "Michael Chen",
      role: "IT Director",
      company: "DataFlow Systems",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "The database architecture Anis designed for our application was robust and scalable. His attention to detail and technical knowledge are impressive.",
      author: "Amanda Rodriguez",
      role: "Product Manager",
      company: "CloudScale Solutions",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Multiplatform Developer", "System Administrator", "Database Expert"],
  heading: "Let's Build Something Amazing Together",
  description: "Looking to collaborate on open-source Java and .NET projects. Currently working on cross-platform applications and expanding knowledge in cloud computing and DevOps.",
  buttonText: "Start a Project",
  buttonHref: "mailto:aniszamoumm@gmai.com",
  email: "aniszamoumm@gmai.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Anis Zamoum",
  description: "Multiplatform Developer from Tizi Ouzou, Algeria. Creating robust cross-platform solutions with expertise in Java, .NET, React, and System Administration.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Full-Stack Development", href: "#services" },
        { label: "Database Management", href: "#services" },
        { label: "System Administration", href: "#services" },
        { label: "Cross-Platform Apps", href: "#services" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { label: "React.js & Node.js", href: "#" },
        { label: "Java & J2EE", href: "#" },
        { label: "C# & ASP.NET", href: "#" },
        { label: "SQL & NoSQL", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Github", href: "https://github.com/aniszeyy", label: "GitHub" },
    { iconName: "Linkedin", href: "#", label: "LinkedIn" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Mail", href: "mailto:aniszamoumm@gmai.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to get the latest updates on my projects and tech insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Anis Zamoum. All rights reserved.",
  credit: "Built with React & Tailwind CSS",
};
