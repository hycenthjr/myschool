import {
  Trophy,
  Target,
  Activity,
  Heart,
  Users,
  Video,
} from "lucide-react";
const academies = [
  {
    name: "Arenas FC (Football)",
    image:
      "https://images.unsplash.com/photo-1668068873075-cf3e9925eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkfGVufDF8fHx8MTc2MTUyMDg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Elite football training on FIFA-standard pitches with UEFA-certified coaches.",
    achievements: [
      "State Champions 2024",
      "3 players scouted by European clubs",
      "Partnership with Manchester City Football Schools",
    ],
    coaches: "6 UEFA-licensed coaches",
  },
  {
    name: "Arenas BC (Basketball)",
    image:
      "https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzYxNDg2OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Professional basketball program with FIBA-standard indoor courts.",
    achievements: [
      "National U-17 Champions 2025",
      "5 players selected for national team trials",
      "Partnership with NBA Basketball Without Borders",
    ],
    coaches: "4 FIBA-certified coaches",
  },
];

const facilities = [
  {
    icon: Target,
    name: "FIFA-Standard Pitch",
    description:
      "Full-size natural grass field with professional drainage and lighting",
  },
  {
    icon: Trophy,
    name: "Indoor Sports Hall",
    description:
      "Multi-purpose hall with basketball, volleyball, and badminton courts",
  },
  {
    icon: Activity,
    name: "Fitness Center",
    description: "Modern gym with strength, conditioning, and cardio equipment",
  },
  {
    icon: Heart,
    name: "Recovery Rooms",
    description:
      "Physiotherapy suite with ice baths, massage tables, and rehab equipment",
  },
  {
    icon: Video,
    name: "Video Analysis Lab",
    description:
      "State-of-the-art facility for match analysis and tactical sessions",
  },
  {
    icon: Users,
    name: "Swimming Pool",
    description: "25-meter pool for aquatic sports and recovery sessions",
  },
];

const analytics = [
  {
    title: "Wearable GPS Tracking",
    description:
      "Monitor speed, distance, acceleration, and fatigue in real-time during training sessions.",
  },
  {
    title: "Performance Heatmaps",
    description:
      "Visual analysis of player positioning, movement patterns, and tactical discipline.",
  },
  {
    title: "Injury Risk Prediction",
    description:
      "AI algorithms flag overtraining and injury risks based on workload data.",
  },
  {
    title: "Recruitment Profiles",
    description:
      "Professional highlight reels and statistical reports for scouts and academies.",
  },
];

const otherSports = [
  "Athletics (Track & Field)",
  "Swimming",
  "Tennis",
  "Table Tennis",
  "Volleyball",
  "Badminton",
  "Chess",
  "Taekwondo",
];
export { academies, facilities, analytics, otherSports };
