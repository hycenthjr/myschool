import { Link } from "react-router";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button";
import Badge from "../../ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { news, upcomingEvents } from "../../lib/landing/newsEventPageData";


export function NewsEventsPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url(./assets/GRG_9725.jpg)] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
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
                      <Badge variant="dark">{item.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title.length > 30
                        ? item.title.substring(0, 30) + "..."
                        : item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.excerpt.length > 70
                        ? item.excerpt.substring(0, 70) + "..."
                        : item.excerpt}
                    </p>
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
              <Button
                text="Subscribe"
                className="bg-white md:py-2"
                variant="ghost"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
