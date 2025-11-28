import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
import Button from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Users, Heart, Briefcase, GraduationCap, Target } from "lucide-react";

export function AlumniPage() {
  const projects = [
    {
      title: "New Science Lab Equipment",
      description:
        "Upgrade chemistry and physics labs with modern equipment for hands-on experiments.",
      goal: 5000000,
      raised: 3750000,
      donors: 42,
      daysLeft: 18,
    },
    {
      title: "Sports Scholarship Fund",
      description:
        "Provide full scholarships for talented athletes from underprivileged backgrounds.",
      goal: 3000000,
      raised: 2100000,
      donors: 28,
      daysLeft: 25,
    },
    {
      title: "Entrepreneurship Mentorship Program",
      description:
        "Fund alumni mentorship visits and workshops for current incubator students.",
      goal: 1500000,
      raised: 950000,
      donors: 15,
      daysLeft: 32,
    },
  ];

  const featuredAlumni = [
    {
      name: "Dr. Chidinma Obi",
      year: "Class of 2015",
      achievement: "Rhodes Scholar, now medical doctor at Johns Hopkins",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Ahmed Bello",
      year: "Class of 2017",
      achievement: "Professional footballer, signed with European club",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Blessing Eze",
      year: "Class of 2018",
      achievement: "Founder, tech startup valued at $2M",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Alumni
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Once Arenas, Always Arenas
            </h1>
            <p className="text-xl text-gray-200">
              Join our network of 5,000+ alumni making impact around the world.
              Stay connected, give back, and support the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl text-gray-900">5,000+</div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div>
              <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl text-gray-900">78%</div>
              <div className="text-gray-600">At University</div>
            </div>
            <div>
              <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl text-gray-900">45</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl text-gray-900">₦12M</div>
              <div className="text-gray-600">Donated (2024)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crowdfunding Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Support Current Students
            </h2>
            <p className="text-xl text-gray-600">
              Fund projects that make a difference at Arenas. 100% transparent,
              100% impact.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">
                          {Math.round((project.raised / project.goal) * 100)}%
                        </span>
                      </div>
                      <Progress
                        value={(project.raised / project.goal) * 100}
                        className="h-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-2xl text-gray-900">
                          ₦{(project.raised / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-sm text-gray-600">
                          of ₦{(project.goal / 1000000).toFixed(1)}M goal
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl text-gray-900">
                          {project.donors}
                        </div>
                        <div className="text-sm text-gray-600">Donors</div>
                      </div>
                    </div>

                    <span
                      className="w-full justify-center"
                    >
                      {project.daysLeft} days left
                    </span>

                    <Button text="Donate Now" className="w-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Alumni Spotlight
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating the achievements of our community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="aspect-square overflow-hidden bg-gray-200">
                  {/* Placeholder for alumni photo */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                    <GraduationCap className="h-16 w-16 text-purple-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-1 text-gray-900">{alumni.name}</h3>
                  <p className="text-sm text-purple-600 mb-3">{alumni.year}</p>
                  <p className="text-gray-600">{alumni.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Alumni Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Stay connected and access exclusive opportunities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Alumni Directory
                  </h3>
                  <p className="text-gray-600">
                    Connect with classmates and network across industries and
                    countries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Mentorship Program
                  </h3>
                  <p className="text-gray-600">
                    Guide current students in your field and give back to the
                    community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Career Services
                  </h3>
                  <p className="text-gray-600">
                    Job board, resume reviews, and career counseling for alumni.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Exclusive Events
                  </h3>
                  <p className="text-gray-600">
                    Alumni reunions, webinars, and networking events throughout
                    the year.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Join the Alumni Network</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Sign up for the alumni directory, receive updates, and discover how
            you can give back.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Register as Alumni"
              className="bg-white text-purple-900 hover:bg-gray-100"
            />
            <Button
              text="Update Your Profile"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
