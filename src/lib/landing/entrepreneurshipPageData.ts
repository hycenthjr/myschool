import { Lightbulb, TrendingUp, Users, Wrench } from "lucide-react";

const programs = [
  {
    icon: Wrench,
    name: "Maker Labs",
    description:
      "Hands-on workshops in coding, robotics, fashion design, automobile mechatronics, and media production.",
    ages: "Ages 10+",
  },
  {
    icon: Lightbulb,
    name: "Business Incubator",
    description:
      "Launch real businesses with mentorship, seed funding, and access to our student marketplace.",
    ages: "Ages 14+",
  },
  {
    icon: Users,
    name: "Mentorship Program",
    description:
      "Connect with alumni entrepreneurs and industry experts for guidance and networking.",
    ages: "All ages",
  },
  {
    icon: TrendingUp,
    name: "Pitch Competitions",
    description:
      "Quarterly competitions where students present business ideas for funding and recognition.",
    ages: "Ages 12+",
  },
];

const tracks = [
  {
    name: "Coding & Robotics",
    description:
      "Build apps, games, and robots. Learn Python, JavaScript, Arduino, and AI fundamentals.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Fashion & Media",
    description:
      "Design, produce, and market clothing lines. Master photography, videography, and branding.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Automobile Mechatronics",
    description:
      "Work on engines, electronics, and vehicle systems. Explore electric vehicle technology.",
    color: "from-orange-500 to-red-500",
  },
];

const successStories = [
  {
    name: "Ada's Threads",
    founder: "Adanna O., Year 11",
    description:
      "Custom school uniforms and fashion accessories. ₦1.2M revenue in first year.",
    category: "Fashion",
  },
  {
    name: "CodeKids Tutors",
    founder: "Michael T., Year 12",
    description:
      "Online coding lessons for primary school students. Scaled to 50+ students across Nigeria.",
    category: "Tech",
  },
  {
    name: "Green Wheels",
    founder: "Tunde A., Alumni 2024",
    description:
      "Electric scooter repair and conversion service. Now a registered company with 3 employees.",
    category: "Auto",
  },
];

const stats = [
  { number: "₦2M+", label: "Student Revenue (Q3 2025)" },
  { number: "47", label: "Active Student Ventures" },
  { number: "15", label: "Mentor Entrepreneurs" },
  { number: "92%", label: "Students with Side Projects" },
];

export { programs, tracks, successStories, stats };
