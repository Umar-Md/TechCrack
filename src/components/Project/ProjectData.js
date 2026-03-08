import tc1Image from "../../assets/tc-1.PNG";
import uiImage from "../../assets/ui.webp";
import hrmImage from "../../assets/hrm.webp";
import pmImage from "../../assets/pm.webp";

export const PROJECTS_DATA = [
  {
    id: 1,
    name: "Smart HRM Portal",
    description:
      "Employee onboarding, attendance, payroll, and leave workflow in one dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: hrmImage,
    previewText: "Employee records and attendance analytics",
  },
  {
    id: 2,
    name: "Project Management Suite",
    description:
      "Task boards, sprint planning, team assignment, and milestone tracking for student and startup teams.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    imageUrl: pmImage,
    previewText: "Sprint board with priorities and deadlines",
  },
  {
    id: 3,
    name: "UI Component Marketplace",
    description:
      "A frontend-focused library explorer with reusable component previews and search filters.",
    tech: ["React", "Vite", "Tailwind CSS"],
    imageUrl: uiImage,
    previewText: "Reusable UI blocks and style variants",
  },
  {
    id: 4,
    name: "Architect Portfolio Platform",
    description:
      "A professional website built for an architect and civil engineer to showcase projects, services, and contact details.",
    tech: ["React", "Router", "Framer Motion"],
    imageUrl: tc1Image,
    previewText: "Architecture and civil works showcase",
  },
];
