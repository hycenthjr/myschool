import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import {
  GraduationCap,
  Trophy,
  Lightbulb,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Palette,
  Wrench,
  ChevronRight,
} from "lucide-react";
import Button from "../components/ui/button";

export function HomePage() {
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
        "Rigorous curriculum with AI-assisted learning and personalized education paths.",
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              World-Class Education
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              Where Champions & Entrepreneurs Are Made
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              A world-class boarding school that combines rigorous academics,
              elite sports training, and real-world entrepreneurship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions">
                <Button
                  text="Apply Now"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  className="bg-white border-white text-blue-900 cursor-pointer"
                  variant="outline"
                />
              </Link>
              <Link to="/virtual-tour">
                <Button
                  text="Book Virtual Tour"
                  className="bg-transparent border-white text-white cursor-pointer hover:bg-white/10"
                  textColor="white"
                  variant="outline"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Why Arenas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our unique three-pillar approach develops well-rounded individuals
              ready to excel in any field.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}
                  >
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <Link to={pillar.link}>
                    <Button
                      text="Learn more"
                      className="border-none h-auto text-blue-600 hover:text-blue-700 cursor-pointer"
                      textColor="white"
                      variant="outline"
                      icon={<ChevronRight size={16} />}
                      iconPosition="right"
                    />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Featured Programs
            </h2>
            <p className="text-xl text-gray-600">
              Specialized tracks that prepare students for the future
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-gray-200"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <program.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium max-w-[11.25rem] text-gray-900">
                      {program.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">+ Many More Specializations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Tour Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mb-6 bg-black text-white rounded-lg px-3 py-1 text-sm font-medium">
                Explore Our Campus
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Experience Arenas From Anywhere
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Take an immersive 360° virtual tour of our world-class
                facilities, from our FIFA-standard football pitch to our
                cutting-edge maker labs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  State-of-the-art classrooms with smart boards
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Professional sports facilities and recovery rooms
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Modern boarding houses with wellness centers
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Entrepreneurship incubator and maker spaces
                </li>
              </ul>
              <Link to="/virtual-tour">
                <Button
                  text="Start Virtual Tour"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Arenas Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              What Families Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Latest News & Events
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with what's happening at Arenas
              </p>
            </div>
            <Link to="/news-events">
              <Button
                text="View All"
                className="bg-white border-gray-200 text-blue-900 cursor-pointer"
                variant="outline"
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Link key={index} to={`/news/${item.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg border-gray-200 transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="mb-3">{item.category}</span>
                    <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Join Arenas?</h2>
          <p className="text-xl mb-4 text-gray-100 max-w-2xl mx-auto">
            Applications are now open for the 2026 academic year. Spaces are
            limited.
          </p>
          <p className="text-lg mb-8 text-gray-200">
            Next intake: January 2026 • Application deadline: December 1, 2025
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions">
              <Button
                text="Apply Now"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                className="bg-white border-white text-blue-900 cursor-pointer"
                variant="outline"
              />
            </Link>
            <Link to="/contact">
              <Button
                text="Schedule a Visit"
                className="bg-transparent border-white text-white cursor-pointer hover:bg-white/10"
                textColor="white"
                variant="outline"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
