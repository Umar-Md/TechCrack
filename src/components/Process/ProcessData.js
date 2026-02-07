import { Lightbulb, Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Idea Discussion",
    desc: "We dive deep into your vision to understand the 'why' behind the project and define core goals.",
    icon: Lightbulb
  },
  {
    id: "02",
    title: "Required Analysis",
    desc: "Detailed breakdown of technical needs, user personas, and market feasibility.",
    icon: Search
  },
  {
    id: "03",
    title: "Design & Architecture",
    desc: "Crafting the UI/UX blueprints and mapping out a scalable backend infrastructure.",
    icon: PenTool
  },
  {
    id: "04",
    title: "Development",
    desc: "Agile coding phase where we build your product using the engineered tech stack.",
    icon: Code2
  },
  {
    id: "05",
    title: "Testing & Launch",
    desc: "Rigorous QA and performance optimization followed by a seamless deployment.",
    icon: Rocket
  },
  {
    id: "06",
    title: "Support & Scaling",
    desc: "Post-launch monitoring, maintenance, and feature updates as your user base grows.",
    icon: TrendingUp
  }
];