import Button from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Trophy,
  Target,
  Activity,
  Heart,
  Users,
  TrendingUp,
  Video,
  Calendar,
} from "lucide-react";

export function SportsPage() {
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
      description:
        "Modern gym with strength, conditioning, and cardio equipment",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Sports & Performance
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Train Like a Champion
            </h1>
            <p className="text-xl text-gray-200">
              Elite sports programs with professional coaching, cutting-edge
              analytics, and world-class facilities designed to unlock every
              athlete's potential.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Our Sports Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Arenas, we don't just teach sports—we develop complete
              athletes. Our programs combine technical skill development,
              tactical intelligence, physical conditioning, mental resilience,
              and data-driven insights to prepare students for competitive
              success at the highest levels.
            </p>
          </div>
        </div>
      </section>

      {/* Academies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Premier Academies
            </h2>
            <p className="text-xl text-gray-600">
              Flagship programs in football and basketball
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {academies.map((academy, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={academy.image}
                    alt={academy.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-3xl mb-4 text-gray-900">
                    {academy.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {academy.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-500 mb-3">
                      Recent Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {academy.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span>{academy.coaches}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Professional-grade infrastructure for optimal performance
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4">
                    <facility.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="mb-4 bg-black text-white rounded-lg px-3 py-1 text-sm">
                Innovation
              </span>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Sports Performance Analytics
              </h2>
              <p className="text-xl text-gray-600">
                Data-driven insights that give our athletes a competitive edge
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {analytics.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Every student-athlete receives a personalized performance
                dashboard accessible via the Student Portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sports */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Additional Sports Programs
              </h2>
              <p className="text-xl text-gray-600">
                A wide range of options to discover and develop your passion
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherSports.map((sport, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-4">
                    <Activity className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700 text-nowrap">{sport}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trial CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Join Our Academy</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Trial sessions available for prospective students. Come train with
            our coaches and experience the Arenas difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Book Trial Session"
              icon={<Calendar size={16} />}
              iconPosition="left"
              className="bg-white text-green-900 hover:bg-gray-100 gap-2"
              variant="outline"
            />
            <Button
              text="Contact Sports Director"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
