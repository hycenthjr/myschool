import {
  Heart,
  GraduationCap,
  BookOpen,
  Trophy,
  Users,
  Building,
} from "lucide-react";

const suggestedAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

const donationCategories = [
  {
    id: "scholarship",
    title: "Scholarship Fund",
    description:
      "Help provide quality education to deserving students who need financial support.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    impact: "₦50,000 supports one student for one term",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    description:
      "Contribute to building world-class facilities including labs, sports centers, and dormitories.",
    icon: Building,
    color: "from-purple-500 to-pink-500",
    impact: "₦100,000 helps upgrade learning facilities",
  },
  {
    id: "sports",
    title: "Sports Excellence Program",
    description:
      "Support our athletic programs with equipment, coaching, and competition participation.",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
    impact: "₦25,000 provides sports equipment",
  },
  {
    id: "books",
    title: "Library & Learning Resources",
    description:
      "Expand our collection of books, digital resources, and educational materials.",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    impact: "₦10,000 adds new books to library",
  },
];

const impactStats = [
  { number: "250+", label: "Students Supported", icon: Users },
  { number: "₦15M", label: "Raised This Year", icon: Heart },
  { number: "85%", label: "Scholarship Recipients", icon: GraduationCap },
  { number: "12", label: "New Facilities Built", icon: Building },
];

export { suggestedAmounts, donationCategories, impactStats };