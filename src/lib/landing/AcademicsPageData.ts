import {
  BookOpen,
  Brain,
  Globe,
  Microscope,
  Calculator,
  Palette,
  Music,
} from "lucide-react";

const divisions = [
  {
    id: "creche",
    name: "Creche (Ages 1-3)",
    description:
      "Play-based learning with emphasis on motor skills, social interaction, and early language development.",
    highlights: [
      "Montessori-inspired",
      "Sensory activities",
      "Music & movement",
      "Parent partnership",
    ],
  },
  {
    id: "nursery",
    name: "Nursery (Ages 3-5)",
    description:
      "Foundation skills in literacy, numeracy, and creative expression through structured play.",
    highlights: [
      "Phonics & early reading",
      "Number concepts",
      "Arts & crafts",
      "Outdoor learning",
    ],
  },
  {
    id: "primary",
    name: "Primary (Years 1-6)",
    description:
      "Comprehensive curriculum aligned with national standards, plus enrichment in STEM, arts, and sports.",
    highlights: [
      "Cambridge Primary",
      "Coding from Year 3",
      "Swimming lessons",
      "Project-based learning",
    ],
  },
  {
    id: "secondary",
    name: "Secondary (Years 7-12)",
    description:
      "IGCSE and A-Level pathways with specialization tracks in sciences, humanities, and entrepreneurship.",
    highlights: [
      "IGCSE & A-Levels",
      "AI-assisted tutoring",
      "University counseling",
      "Research projects",
    ],
  },
];

const subjects = [
  { icon: Calculator, name: "Mathematics & Further Maths", category: "STEM" },
  {
    icon: Microscope,
    name: "Sciences (Physics, Chemistry, Biology)",
    category: "STEM",
  },
  { icon: Brain, name: "Computer Science & Robotics", category: "STEM" },
  { icon: Globe, name: "Geography & Economics", category: "Humanities" },
  { icon: BookOpen, name: "English & Literature", category: "Humanities" },
  { icon: Palette, name: "Visual Arts & Design", category: "Arts" },
  { icon: Music, name: "Music & Performing Arts", category: "Arts" },
];

const assessmentPrinciples = [
  "Continuous formative assessment to guide learning",
  "Summative exams at end of each term",
  "Project-based portfolios for entrepreneurship",
  "Sports performance analytics as part of PE assessment",
  "Digital badges and micro-credentials for skills mastery",
  "Parent-teacher conferences twice per year",
];

export {divisions, subjects, assessmentPrinciples};