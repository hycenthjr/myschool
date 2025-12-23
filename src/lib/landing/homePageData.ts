import {
  GraduationCap,
  Trophy,
  Lightbulb,
  Award,
  Cpu,
  Palette,
  Wrench,
} from "lucide-react";
import { assets } from "../../assets/assets";


const heroslides = [
  {
    title: "Where Champions & Entrepreneurs Are Made",
    description:
      "A world-class boarding school that combines rigorous academics, elite sports training, and real-world entrepreneurship.",
    backgroundImage: assets.landingWelcome,
    // "https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradientFrom: "from-gray-900",
    gradientVia: "via-blue-900",
    gradientTo: "to-purple-900",
    badge: "World-Class Education",
  },
  {
    title: "Elite Sports Training Programs",
    description:
      "FIFA-standard facilities with professional coaches, wearable analytics, and world-class athlete development.",
    backgroundImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtfGVufDF8fHx8fDE3NjE1MjA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradientFrom: "from-red-900",
    gradientVia: "via-orange-900",
    gradientTo: "to-yellow-900",
    badge: "Sports Excellence",
  },
  {
    title: "Entrepreneurship & Innovation Hub",
    description:
      "Real-world business skills with maker labs, incubator programs, and student ventures generating revenue.",
    backgroundImage: assets.landingEntrepreneurship,
    // backgroundImage:
    //   "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradientFrom: "from-green-900",
    gradientVia: "via-emerald-900",
    gradientTo: "to-teal-900",
    badge: "Innovation Leaders",
  },
];

const stats = [
  { number: "1,500+", label: "Students" },
  { number: "120+", label: "Expert Staff" },
  { number: "15+", label: "Specialized Labs" },
  { number: "5,000+", label: "Alumni Network" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Rigorous curriculum with personalized education paths empowering students towards success and growth.",
    color: "from-blue-500 to-cyan-500",
    link: "/academics",
  },
  {
    icon: Trophy,
    title: "Sports Performance",
    description:
      "Elite training with wearable analytics, professional coaches, and FIFA-standard facilities.",
    color: "from-purple-500 to-pink-500",
    link: "/sports",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description:
      "Real-world business skills with maker labs, incubator programs, and revenue-generating projects.",
    color: "from-orange-500 to-red-500",
    link: "/entrepreneurship",
  },
];

const programs = [
  {
    icon: Cpu,
    name: "Coding & Robotics",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Palette,
    name: "Fashion & Media",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Wrench,
    name: "Automobile Mechatronics",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Trophy,
    name: "Football Academy (Arenas FC)",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    name: "Basketball Academy (Arenas BC)",
    color: "bg-red-100 text-red-600",
  },
];

const testimonials = [
  {
    text: "Arenas transformed my son from a shy child to a confident young entrepreneur. The combination of sports and business education is truly unique.",
    author: "Mrs. Adebayo",
    role: "Parent of Year 10 Student",
  },
  {
    text: "The sports analytics program here is world-class. I've received scholarship offers from three international academies thanks to the performance data.",
    author: "David O.",
    role: "Arenas FC Student-Athlete",
  },
  {
    text: "My daughter's fashion startup, launched at the Arenas Incubator, now sells to customers across Nigeria. The mentorship was invaluable.",
    author: "Mr. Okonkwo",
    role: "Parent & Business Partner",
  },
];

const newsItems = [
  {
    image:
      "https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzYxNDg2OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Arenas BC Wins Regional Championship",
    date: "October 15, 2025",
    category: "Sports",
    slug: "arenas-bc-wins-championship",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWJ8ZW58MXx8fHwxNzYxNDg3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "New AI Learning Lab Opens",
    date: "October 10, 2025",
    category: "Academics",
    slug: "ai-learning-lab-opens",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudHJlcHJlbmV1cnNoaXB8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Student Ventures Generate ₦2M in Q3",
    date: "October 5, 2025",
    category: "Entrepreneurship",
    slug: "student-ventures-2m",
  },
];

export { heroslides , stats, pillars, programs, testimonials, newsItems };
