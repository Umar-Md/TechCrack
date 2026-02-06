import { Code, Search, Layout, Cpu, Globe, BarChart } from 'lucide-react';

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
    id: 'ui-ux',
    title: "3D Interactive Design",
    desc: "Immersive user experiences using Three.js and R3F to make your brand stand out.",
    icon: Layout,
    recommended: false
  },
  {
    id: 'api',
    title: "Custom API Solutions",
    desc: "Building scalable, secure, and well-documented APIs for your business ecosystem.",
    icon: Cpu,
    recommended: false
  }
];