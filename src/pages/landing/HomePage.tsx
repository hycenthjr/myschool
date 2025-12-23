import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronRight,
  Heart,
} from "lucide-react";
import {
  heroslides,
  stats,
  pillars,
  programs,
  testimonials,
  newsItems,
} from "../../lib/landing/homePageData";


export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroslides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section Slider */}
      <section className="relative text-white overflow-hidden">
        {heroslides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradientFrom} ${slide.gradientVia} ${slide.gradientTo}`}
            />
            <div
              className="absolute inset-0 opacity-30 bg-cover bg-center md:bg-[position:top_20%]"
              style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
            />
          </div>
        ))}

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block bg-white/20 border border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              {heroslides[currentSlide].badge}
            </span>
            <h1 className="text-4xl md:text-7xl mb-6 text-white transition-all duration-500">
              {heroslides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-500">
              {heroslides[currentSlide].description}
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
              <Link to="/donate">
                <Button
                  text="Donate"
                  icon={<Heart size={16} />}
                  iconPosition="left"
                  className="bg-transparent border-white text-white cursor-pointer hover:bg-white/10"
                  textColor="white"
                  variant="outline"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroslides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
                  <p className="text-gray-600 mb-4 text-md">
                    {pillar.description}
                  </p>
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
            <Link to="/news-events" className="hidden md:inline-flex">
              <Button
                text="View All"
                className="bg-white border-gray-200 text-blue-900 cursor-pointer"
                variant="outline"
              />
            </Link>
          </div>
          <Link to="/news-events" className="md:hidden mb-6 inline-flex">
            <Button
              text="View All"
              className="bg-white border-gray-200 text-blue-900 cursor-pointer"
              variant="outline"
            />
          </Link>
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
                    <h3 className="text-xl mb-2 text-gray-900">
                      {item.title.length > 30
                        ? item.title.substring(0, 30) + "..."
                        : item.title}
                    </h3>
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
