import Button from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
import { Trophy, Activity, TrendingUp, Calendar } from "lucide-react";
import {
  academies,
  facilities,
  analytics,
  otherSports,
} from "../../lib/landing/sportsPageData";

export function SportsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url(./assets/GRG_9725.jpg)] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
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
