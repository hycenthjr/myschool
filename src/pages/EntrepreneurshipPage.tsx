import Button from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Lightbulb,
  Rocket,
  ShoppingCart,
  Wrench,
  Users,
  TrendingUp,
  Award,
  DollarSign,
} from "lucide-react";

export function EntrepreneurshipPage() {
  const programs = [
    {
      icon: Wrench,
      name: "Maker Labs",
      description:
        "Hands-on workshops in coding, robotics, fashion design, automobile mechatronics, and media production.",
      ages: "Ages 10+",
    },
    {
      icon: Lightbulb,
      name: "Business Incubator",
      description:
        "Launch real businesses with mentorship, seed funding, and access to our student marketplace.",
      ages: "Ages 14+",
    },
    {
      icon: Users,
      name: "Mentorship Program",
      description:
        "Connect with alumni entrepreneurs and industry experts for guidance and networking.",
      ages: "All ages",
    },
    {
      icon: TrendingUp,
      name: "Pitch Competitions",
      description:
        "Quarterly competitions where students present business ideas for funding and recognition.",
      ages: "Ages 12+",
    },
  ];

  const tracks = [
    {
      name: "Coding & Robotics",
      description:
        "Build apps, games, and robots. Learn Python, JavaScript, Arduino, and AI fundamentals.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fashion & Media",
      description:
        "Design, produce, and market clothing lines. Master photography, videography, and branding.",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Automobile Mechatronics",
      description:
        "Work on engines, electronics, and vehicle systems. Explore electric vehicle technology.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const successStories = [
    {
      name: "Ada's Threads",
      founder: "Adanna O., Year 11",
      description:
        "Custom school uniforms and fashion accessories. ₦1.2M revenue in first year.",
      category: "Fashion",
    },
    {
      name: "CodeKids Tutors",
      founder: "Michael T., Year 12",
      description:
        "Online coding lessons for primary school students. Scaled to 50+ students across Nigeria.",
      category: "Tech",
    },
    {
      name: "Green Wheels",
      founder: "Tunde A., Alumni 2024",
      description:
        "Electric scooter repair and conversion service. Now a registered company with 3 employees.",
      category: "Auto",
    },
  ];

  const stats = [
    { number: "₦2M+", label: "Student Revenue (Q3 2025)" },
    { number: "47", label: "Active Student Ventures" },
    { number: "15", label: "Mentor Entrepreneurs" },
    { number: "92%", label: "Students with Side Projects" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-purple-900 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Entrepreneurship
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Build Real Businesses, Not Just Resumes
            </h1>
            <p className="text-xl text-gray-200">
              Our maker-incubator model empowers students to turn ideas into
              revenue-generating ventures, learning business skills that last a
              lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudHJlcHJlbmV1cnNoaXB8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students working on projects"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl mb-6 text-gray-900">
                Our Learning Model
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Entrepreneurship at Arenas isn't a theoretical class—it's a
                lived experience. Students move through four stages:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Explore</h3>
                    <p className="text-gray-600">
                      Try different maker tracks to discover your passion and
                      skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Develop</h3>
                    <p className="text-gray-600">
                      Create prototypes, refine your product, and learn
                      marketing basics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Launch</h3>
                    <p className="text-gray-600">
                      Sell on our marketplace, manage inventory, and handle real
                      customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Scale</h3>
                    <p className="text-gray-600">
                      Receive mentorship, funding, and support to grow your
                      venture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Entrepreneurship Programs
            </h2>
            <p className="text-xl text-gray-600">
              Structured pathways from idea to execution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{program.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {program.description}
                  </p>
                  <span className="rounded-lg bg-gray-200 px-3 py-1 text-sm">
                    {program.ages}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Specialization Tracks
            </h2>
            <p className="text-xl text-gray-600">
              Deep-dive into your area of interest
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tracks.map((track, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${track.color}`} />
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4 text-gray-900">{track.name}</h3>
                  <p className="text-gray-600">{track.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="rounded-lg bg-black text-white px-3 py-1 text-sm">
                  Arenas Marketplace
                </span>
                <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                  Shop Student Creations
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Our online marketplace allows students to sell their products
                  to parents, staff, alumni, and the public. Every transaction
                  is supervised by staff, and revenue sharing teaches real
                  business economics.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <ShoppingCart className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    Secure payments via ArenasPAY
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <DollarSign className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    Students keep 70% of profits after costs
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Award className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    Best sellers receive featured placement
                  </li>
                </ul>
                <Button
                  text="Visit Marketplace"
                  className="bg-gradient-to-r from-orange-600 to-purple-600 cursor-pointer"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <img
                      src="https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWJ8ZW58MXx8fHwxNzYxNDg3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-900">Custom T-Shirts</p>
                    <p className="text-xs text-gray-500">₦2,500</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <img
                      src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudHJlcHJlbmV1cnNoaXB8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-900">Phone Stands</p>
                    <p className="text-xs text-gray-500">₦1,200</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <img
                      src="https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWJ8ZW58MXx8fHwxNzYxNDg3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-900">Arduino Kits</p>
                    <p className="text-xs text-gray-500">₦8,000</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <img
                      src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudHJlcHJlbmV1cnNoaXB8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-900">Handmade Bags</p>
                    <p className="text-xs text-gray-500">₦4,500</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Students building real, profitable businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <span className="rounded-lg bg-black text-white px-3 py-1 text-sm">
                    {story.category}
                  </span>
                  <h3 className="text-2xl mb-2 text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{story.founder}</p>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Become a Mentor</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Share your entrepreneurial experience with our students. Alumni and
            industry professionals welcome.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Apply to Mentor"
              icon={<Rocket size={16} />}
              iconPosition="left"
              className="bg-white text-orange-900 hover:bg-gray-100 gap-2 border-none cursor-pointer"
              variant="outline"
            />
            <Button
              text="Learn More"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
