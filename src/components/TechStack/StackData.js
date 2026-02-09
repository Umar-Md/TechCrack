import { 
  FileCode, 
  Layers, 
  Settings, 
  Database, 
  Cpu, 
  Globe,
  Code2, 
  Paintbrush, 
  Terminal,
  Server
} from 'lucide-react';

export const TECH_CATEGORIES = [
  {
    title: "Foundations",
    subtitle: "Core Languages",
    items: [
      { name: "HTML5", icon: Code2, color: "text-orange-500" },
      { name: "CSS3", icon: Paintbrush, color: "text-blue-600" },
      { name: "JavaScript", icon: Terminal, color: "text-yellow-400" },
      { name: "TypeScript", icon: Settings, color: "text-blue-500" },
    ]
  },
  {
    title: "Frontend",
    subtitle: "Frameworks & UI",
    items: [
      { name: "React.js", icon: FileCode, color: "text-cyan-400" },
      { name: "Next.js", icon: Globe, color: "text-white" },
      { name: "Tailwind CSS", icon: Settings, color: "text-teal-400" },
      { name: "Angular", icon: Layers, color: "text-red-500" }
    ]
  },
  {
    title: "Backend & DB",
    subtitle: "Server Side",
    items: [
      { name: "Node.js", icon: Cpu, color: "text-green-500" },
      { name: "Express", icon: Server, color: "text-gray-400" },
      { name: "MongoDB", icon: Database, color: "text-green-600" }
    ]
  }
];