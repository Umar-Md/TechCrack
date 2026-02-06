import { 
  FileCode, 
  Layers, 
  Settings, 
  Database, 
  Cpu, 
  Globe 
} from 'lucide-react';

export const TECH_CATEGORIES = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FileCode, color: "text-cyan-400" },
      { name: "Next.js", icon: Globe, color: "text-white" },
      { name: "TypeScript", icon: Settings, color: "text-blue-500" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Cpu, color: "text-green-500" },
      { name: "Express", icon: Layers, color: "text-gray-400" }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: Database, color: "text-green-600" }
    ]
  }
];