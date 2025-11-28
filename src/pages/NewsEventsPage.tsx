import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
import Button from "../components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function NewsEventsPage() {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzYxNDg2OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Arenas BC Wins Regional Championship",
      date: "October 15, 2025",
      category: "Sports",
      excerpt:
        "Our basketball team brought home the trophy after an intense final match. Three players selected for national trials.",
      slug: "arenas-bc-wins-championship",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWJ8ZW58MXx8fHwxNzYxNDg3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "New AI Learning Lab Opens",
      date: "October 10, 2025",
      category: "Academics",
      excerpt:
        "State-of-the-art AI lab with 30 workstations now available for coding and robotics students.",
      slug: "ai-learning-lab-opens",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudHJlcHJlbmV1cnNoaXB8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Student Ventures Generate ₦2M in Q3",
      date: "October 5, 2025",
      category: "Entrepreneurship",
      excerpt:
        "Record quarter for our incubator marketplace. Five student businesses hit profitability.",
      slug: "student-ventures-2m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTQ4NzA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cambridge Exam Results: 98% Pass Rate",
      date: "September 28, 2025",
      category: "Academics",
      excerpt:
        "Outstanding IGCSE results with 45% achieving A* grades. Congratulations to all students!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1668068873075-cf3e9925eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkfGVufDF8fHx8MTc2MTUyMDg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Partnership with Manchester City Football Schools",
      date: "September 20, 2025",
      category: "Sports",
      excerpt:
        "Arenas FC now part of global coaching network. Two coaches to receive training in UK.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Solar Panel Installation Complete",
      date: "September 15, 2025",
      category: "Sustainability",
      excerpt:
        "Campus now generates 60% of electricity from solar. Students can track real-time data via dashboard.",
    },
  ];

  const upcomingEvents = [
    {
      date: "Nov 5",
      month: "2025",
      title: "Open House for Prospective Families",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus",
    },
    {
      date: "Nov 12",
      month: "2025",
      title: "Inter-House Sports Day",
      time: "8:00 AM - 4:00 PM",
      location: "Sports Complex",
    },
    {
      date: "Nov 18",
      month: "2025",
      title: "Entrepreneurship Pitch Competition",
      time: "2:00 PM - 5:00 PM",
      location: "Maker Labs",
    },
    {
      date: "Nov 25",
      month: "2025",
      title: "Parent-Teacher Conferences",
      time: "All Day",
      location: "Academic Block",
    },
    {
      date: "Dec 1",
      month: "2025",
      title: "Application Deadline (Jan 2026 Intake)",
      time: "11:59 PM",
      location: "Online",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              News & Events
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Stay Connected
            </h1>
            <p className="text-xl text-gray-200">
              The latest updates, achievements, and upcoming events from the
              Arenas community.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Latest News
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating achievements across academics, sports, and
              entrepreneurship
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Link key={index} to={`/news/${item.slug}`}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span>{item.category}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Button
                      text="Read more"
                      icon={<ArrowRight className="h-4 w-4 ml-1" />}
                      iconPosition="right"
                      variant="ghost"
                      className="p-0 h-auto text-blue-600 group-hover:gap-2 transition-all"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendar for these important dates
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-lg min-w-[80px]">
                      <div className="text-xs uppercase mb-1">
                        {event.month}
                      </div>
                      <div className="text-3xl">{event.date}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 text-gray-900">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="text-sm text-gray-600">
                        {event.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Never Miss an Update</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Subscribe to our monthly newsletter for news, events, and stories
            from the Arenas community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <form className="w-full flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <Button text="Subscribe" className="bg-white md:py-2" variant="ghost" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
