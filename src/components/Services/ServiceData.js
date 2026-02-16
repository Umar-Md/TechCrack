import {
  Code,
  Globe,
  FileCheck,
  GraduationCap,
  FileText,
  LayoutDashboard,
  Palette
} from 'lucide-react';

export const SERVICES_LIST = [
  {
    id: 'major-projects',
    title: "Major Projects",
    desc: "Complete final-year projects with source code, admin panel, and deployment support.",
    icon: GraduationCap,
    recommended: true,
    type: 'project',
    target: 'For Students',
    cta: "Get Project Details",
    path: "/contact?service=major-projects"
  },
  {
    id: 'mini-projects',
    title: "Mini Projects",
    desc: "Ready-to-use mini projects for practice, submissions, and portfolio building.",
    icon: Code,
    recommended: true,
    type: 'project',
    target: 'For Students',
    cta: "Request Project",
    path: "/contact?service=mini-projects"
  },
  {
    id: 'web-development',
    title: "Custom Website Development",
    desc: "Professional websites and applications built using modern technologies like Next.js and React.",
    icon: Globe,
    recommended: true,
    type: 'service',
    target: 'For Clients',
    cta: "Start Project",
    path: "/contact?service=web-development"
  },
  {
    id: 'graphic-design',
    title: "Graphic & UI/UX Design",
    desc: "Professional UI/UX designing for websites and mobile apps along with custom graphic solutions.",
    icon: Palette,
    recommended: false,
    type: 'service',
    target: 'For Clients',
    cta: "Hire Designer",
    path: "/contact?service=graphic-design"
  },
  {
    id: 'enterprise-solutions',
    title: "Enterprise Applications",
    desc: "Scalable enterprise applications with secure backend, dashboards, and authentication systems.",
    icon: LayoutDashboard,
    recommended: false,
    type: 'service',
    target: 'For Clients',
    cta: "Discuss Project",
    path: "/contact?service=enterprise-solutions"
  },
  {
    id: 'resume-checker',
    title: "AI Resume Score Checker",
    desc: "AI-powered ATS analysis to improve resume quality and increase job opportunities.",
    icon: FileCheck,
    recommended: false,
    type: 'tool',
    target: 'For Everyone',
    cta: "Try Now",
    path: "/resume-ai"
  },
  {
    id: 'resume-templates',
    title: "Resume Templates & Resources",
    desc: "Professional ATS-friendly resume templates and career resources.",
    icon: FileText,
    recommended: true,
    type: 'product',
    target: 'For Students',
    cta: "View Resources",
    path: "/resources"
  }
];