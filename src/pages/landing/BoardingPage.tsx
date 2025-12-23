import { Card, CardContent } from "../../ui/card";
import { Utensils, Heart, Shield, Clock, Moon } from "lucide-react";
import {
  hostelFeatures,
  dailySchedule,
  healthWelfare,
} from "../../lib/landing/boardingPageData";

export function BoardingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url(./assets/GRG_7732.jpg)] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Boarding Life
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              A Home Away From Home
            </h1>
            <p className="text-xl text-gray-200">
              Our boarding facilities provide a safe, nurturing environment
              where students thrive academically, socially, and personally under
              the care of dedicated staff.
            </p>
          </div>
        </div>
      </section>

      {/* Hostel Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">
                Our Boarding Houses
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Arenas boarding houses are designed to feel like home. Students
                are grouped by age and gender, with each house led by
                experienced housemasters and matrons who provide pastoral care,
                mentorship, and support.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond just accommodation, boarding life at Arenas is about
                building lasting friendships, learning independence, and
                becoming part of a close-knit community that extends beyond the
                classroom.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl text-blue-600 mb-1">300+</div>
                    <div className="text-sm text-gray-600">
                      Boarding Students
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl text-blue-600 mb-1">12</div>
                    <div className="text-sm text-gray-600">Dedicated Staff</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Boarding house"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Boarding Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything students need for comfort and success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hostelFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                A Day in the Life
              </h2>
              <p className="text-xl text-gray-600">
                Sample weekday schedule for boarding students
              </p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {dailySchedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-900">
                          {item.time}
                        </span>
                      </div>
                      <div className="text-gray-600">{item.activity}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 italic">
                    Weekends include optional trips, sports matches, family
                    visits, and more relaxed schedules with choice activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meals */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559759043-8e2e08d9c932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYWZldGVyaWElMjBkaW5pbmd8ZW58MXx8fHwxNzYxNDYwNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dining hall"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="rounded-lg bg-black text-white px-3 py-1 text-sm">
                  Nutrition
                </span>
                <h2 className="text-4xl mb-6 text-gray-900">
                  Healthy, Delicious Meals
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our qualified chefs prepare nutritious, balanced meals three
                  times a day, catering to various dietary needs and cultural
                  preferences. Menu planning considers both health requirements
                  and student favorites.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <Utensils className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span>
                      Rotating weekly menus with Nigerian and international
                      dishes
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Utensils className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span>
                      Special diets accommodated (vegetarian, allergies,
                      religious)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Utensils className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span>
                      Fresh fruit and healthy snacks available throughout the
                      day
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Utensils className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span>
                      Nutrition education integrated into wellness program
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Welfare */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Health & Welfare
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive care for body and mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {healthWelfare.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-green-600" />
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
        </div>
      </section>

      {/* Security & Safety */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-4xl text-gray-900">Security & Safety</h2>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl mb-4 text-gray-900">
                      Campus Security
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 24/7 trained security personnel</li>
                      <li>• Controlled gate access with visitor log</li>
                      <li>• CCTV monitoring of common areas</li>
                      <li>• Secure perimeter fencing</li>
                      <li>• Emergency response protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 text-gray-900">
                      Student Safety
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Nightly bed-check and roll call</li>
                      <li>• Fire drills and safety training</li>
                      <li>• First aid trained staff in each house</li>
                      <li>• Clear exeat (leave) policies</li>
                      <li>• Parent notification for all absences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Night Time */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Moon className="h-10 w-10 text-purple-600" />
                  <h2 className="text-4xl text-gray-900">Evening Routine</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  After dinner and study hall, students have free time to relax,
                  socialize, or pursue hobbies before lights out. Housemasters
                  and matrons are always on duty for any needs or concerns.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>Quiet supervised study time every evening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>
                      Common room activities: games, movies, group chats
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>
                      Personal time for reading, hobbies, or phone calls home
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>Age-appropriate lights out (9:30 PM - 10:30 PM)</span>
                  </li>
                </ul>
              </div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-gray-900">
                    Parent Communication
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We believe in strong parent partnerships. Here's how we stay
                    connected:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>Weekly email updates from housemasters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>Parent portal with real-time welfare notes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>Scheduled phone call windows for students</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>Open visiting hours on weekends</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
