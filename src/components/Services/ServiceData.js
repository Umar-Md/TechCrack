import { Code, Search, Globe, FileCheck } from 'lucide-react';

export const SERVICES_LIST = [
  {
    id: 'web-dev',
    title: "Fullstack Development",
    desc: "High-performance web applications built with React, Next.js, and robust Node.js backends.",
    icon: Code,
    recommended: true
  },
  {
    id: 'seo',
    title: "Technical SEO",
    desc: "Optimizing site architecture and speed to dominate search engine rankings and drive organic traffic.",
    icon: Search,
    recommended: true
  },
  {
    id: 'wordpress',
    title: "WordPress Solutions",
    desc: "Custom CMS development, theme optimization, and high-speed WooCommerce architectures.",
    icon: Globe,
    recommended: false
  },
  {
    id: 'resume-ai',
    title: "Resume Score Checker",
    desc: "AI-driven ATS analysis to optimize your engineering resume for top-tier tech roles.",
    icon: FileCheck,
    recommended: false,
    path: '/resume-ai' // Target route
  }
];