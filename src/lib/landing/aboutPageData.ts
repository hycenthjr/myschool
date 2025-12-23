import { Target, Heart, Award, Users, Eye, Goal } from "lucide-react";
import { assets } from "../../assets/assets";

const leaders = [
  {
    name: "Dr. Emmanuel Arenas",
    role: "Proprietor & Founder",
    image: assets.placeholder,
    bio: "Former professional athlete and entrepreneur with 20+ years in education innovation.",
  },
  {
    name: "Mr. ",
    role: "MD, Arenas Homes (Boarding)",
    image: assets.placeholder,
    bio: "Child welfare specialist with expertise in adolescent psychology and residential education.",
  },
  {
    name: "Mr. Peter ",
    role: "Principal",
    image: assets.principal,
    bio: "Ph.D. in Educational Leadership, former Cambridge examiner, champion of personalized learning.",
  },
  {
    name: "Unknown",
    role: "Director of Entrepreneurship",
    image: assets.placeholder,
    bio: "Serial entrepreneur and mentor, built 3 successful tech startups before age 35.",
  },
];

const views = [
  {
    icon: Goal,
    color: "text-blue-600",
    bg: "bg-blue-100",
    title: "Our Mission",
    description:
      "Our mission is to provide a holistic education that combines academic curriculum with comprehensive sports training and entrepreneurial skills development, preparing students to become well-rounded individuals who can thrive in a competitive global environment.",
  },
  {
    icon: Eye,
    color: "text-purple-600",
    bg: "bg-purple-100",
    title: "Our Vision",
    description:
      "To create a world-class educational institution that empowers students to excel in both sports and entrepreneurship, fostering a culture of innovation, leadership, and success.",
  },
  {
    icon: Target,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    title: "Aim",
    description:
      "We aim to cultivate a generation of young Educational leaders who are not only skilled in their chosen sports and entrepreneurial endeavors but also possess the knowledge, values, and mindset to make a positive impact in our society. We strive to instill in our students a passion for learning, a drive for success, and a commitment to continuous improvement.",
  },
  {
    icon: Heart,
    color: "text-red-600",
    bg: "bg-red-100",
    title: "Purpose",
    description:
      "The purpose of Arenas Group of Schools is to provide a unique and innovative educational experience that equips students with the skills, knowledge, and mindset to excel in both sports and entrepreneurship. By offering a comprehensive and integrated curriculum that combines academic with practical training, we aim to prepare students for success in a rapidly changing world, where creativity, adaptability, and resilience are essential qualities for personal and professional growth.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue the highest standards in academics, sports, and character development.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We build trust through honesty, transparency, and ethical behavior in all we do.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We foster a supportive, inclusive environment where everyone belongs and thrives.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We embrace new ideas, technologies, and methods to stay ahead of the curve.",
  },
];

const accreditations = [
  "Nigerian Ministry of Education",
  "West African Examinations Council (WAEC)",
  "Cambridge International Examinations",
  "International Baccalaureate (IB) Candidate School",
  "FIFA Grassroots Partner School",
  "Microsoft Showcase School",
];

export { leaders, views, values, accreditations };
