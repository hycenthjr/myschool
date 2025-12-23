import {
  Home,
  Utensils,
  Heart,
  Shield,
  Users,
  BookOpen,
} from "lucide-react";

const hostelFeatures = [
  {
    icon: Home,
    title: "Modern Rooms",
    description:
      "4-6 bed rooms with ensuite bathrooms, study desks, and ample storage",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description:
      "Three balanced meals daily plus snacks, prepared by qualified chefs",
  },
  {
    icon: Heart,
    title: "Welfare Support",
    description:
      "Dedicated matrons and housemasters for emotional and social wellbeing",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Secure perimeter, CCTV monitoring, and controlled access",
  },
  {
    icon: Users,
    title: "Common Rooms",
    description: "Social spaces with games, TV, and areas for group activities",
  },
  {
    icon: BookOpen,
    title: "Study Halls",
    description:
      "Quiet supervised study time every evening with teacher support",
  },
];

const dailySchedule = [
  { time: "6:00 AM", activity: "Wake-up bell & personal hygiene" },
  { time: "6:30 AM", activity: "Morning exercise / sports practice" },
  { time: "7:30 AM", activity: "Breakfast in dining hall" },
  { time: "8:00 AM", activity: "Morning assembly & classes begin" },
  { time: "1:00 PM", activity: "Lunch break" },
  { time: "2:00 PM", activity: "Afternoon classes / activities" },
  { time: "4:00 PM", activity: "Sports / clubs / maker labs" },
  { time: "6:00 PM", activity: "Dinner" },
  { time: "7:00 PM", activity: "Supervised study hall" },
  { time: "9:00 PM", activity: "Free time / social activities" },
  { time: "10:00 PM", activity: "Lights out (varies by age group)" },
];

const healthWelfare = [
  {
    title: "On-Site Sickbay",
    description: "Qualified nurses on duty 24/7 with modern medical equipment",
  },
  {
    title: "Telehealth Access",
    description: "Video consultations with doctors and specialists as needed",
  },
  {
    title: "Counseling Services",
    description:
      "Age-appropriate mental health support and confidential counseling",
  },
  {
    title: "Medication Management",
    description:
      "Secure storage and scheduled administration of prescribed medications",
  },
];

export { hostelFeatures, dailySchedule, healthWelfare };
