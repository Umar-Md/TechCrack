import { FileText, Zap, ShieldCheck, BookOpen } from 'lucide-react';

export const PDF_PRODUCTS = [
  {
    // Changed id to match 'java.pdf'
    id: 'java', 
    title: "Java Interview Guide",
    price: 199,
    desc: "Comprehensive Java Q&A for top tech companies.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    // Changed id to match 'JavaScript.pdf'
    id: 'JavaScript', 
    title: "JavaScript Mastery",
    price: 149,
    desc: "Deep dive into JS engines and modern syntax.",
    icon: FileText,
    color: "text-cyan-400"
  },
  {
    // Changed id to match 'Python.pdf'
    id: 'Python', 
    title: "Python Interview Q&A",
    price: 149,
    desc: "Core Python and Data Science interview essentials.",
    icon: BookOpen,
    color: "text-green-400"
  },
  {
    // Changed id to match 'sql.pdf'
    id: 'sql', 
    title: "SQL & Database Bundle",
    price: 129,
    desc: "Complex queries and Schema design patterns.",
    icon: ShieldCheck,
    color: "text-purple-400"
  }
];