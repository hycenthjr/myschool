import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
import { Shield, Target, Heart, Award, Users, CheckCircle } from "lucide-react";

export function AboutPage() {
  const leaders = [
    {
      name: "Dr. Emmanuel Arenas",
      role: "Proprietor & Founder",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Former professional athlete and entrepreneur with 20+ years in education innovation.",
    },
    {
      name: "Prof. Oluwaseun Adebayo",
      role: "Principal",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Ph.D. in Educational Leadership, former Cambridge examiner, champion of personalized learning.",
    },
    {
      name: "Engr. Chioma Okafor",
      role: "Director of Entrepreneurship",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Serial entrepreneur and mentor, built 3 successful tech startups before age 35.",
    },
    {
      name: "Mr. Tunde Bakare",
      role: "MD, Arenas Homes (Boarding)",
      image:
        "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsZWFkZXJzaGlwJTIwdGVhY2hlcnxlbnwxfHx8fDE3NjE1MjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Child welfare specialist with expertise in adolescent psychology and residential education.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We pursue the highest standards in academics, sports, and character development.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We build trust through honesty, transparency, and ethical behavior in all we do.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster a supportive, inclusive environment where everyone belongs and thrives.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace new ideas, technologies, and methods to stay ahead of the curve.",
    },
  ];

  const accreditations = [
    "Nigerian Ministry of Education",
    "West African Examinations Council (WAEC)",
    "Cambridge International Examinations",
    "International Baccalaureate (IB) Candidate School",
    "FIFA Grassroots Partner School",
    "Microsoft Showcase School",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              About Arenas
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Building Tomorrow's Leaders Today
            </h1>
            <p className="text-xl text-gray-200">
              Since 2010, Arenas Group of Schools has been pioneering a unique
              educational model that develops well-rounded individuals ready to
              excel in any field.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl mb-4 text-gray-900">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide a transformative education that combines academic
                  rigor, elite sports training, and entrepreneurial
                  skill-building, empowering students to become confident,
                  innovative leaders who make a positive impact on the world.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl mb-4 text-gray-900">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be Africa's leading institution where champions and
                  entrepreneurs are made—recognized globally for producing
                  graduates who excel in multiple domains and lead with
                  integrity, creativity, and purpose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Arenas Group of Schools was founded in 2010 by Dr. Emmanuel
                Arenas, a former professional footballer who recognized the need
                for an educational institution that didn't force young people to
                choose between academic excellence and athletic or
                entrepreneurial pursuits.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Starting with just 47 students in a converted community center,
                Arenas has grown into a world-class boarding institution serving
                over 1,500 students from across Nigeria and beyond. Our unique
                three-pillar model—academics, sports, and entrepreneurship—has
                produced graduates who have gone on to earn scholarships at top
                universities, sign professional sports contracts, and launch
                successful businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Arenas stands as a testament to the power of holistic
                education. Our FIFA-standard sports facilities, cutting-edge
                maker labs, and AI-enhanced learning platforms represent our
                ongoing commitment to providing students with every tool they
                need to succeed in an increasingly complex world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries driving Arenas forward
            </p>
          </div>

          {/* Top Leader */}
          <div className="flex justify-center mb-12 max-w-[23rem] mx-auto">
            {leaders.slice(3).map((leader, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-1 text-gray-900">{leader.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{leader.role}</p>
                  <p className="text-sm text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bottom Leader */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.slice(1).map((leader, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-1 text-gray-900">{leader.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{leader.role}</p>
                  <p className="text-sm text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-4xl text-gray-900">
                  Safeguarding & Child Protection
                </h2>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The safety and wellbeing of every student is our highest
                  priority. Arenas maintains a comprehensive safeguarding policy
                  that exceeds national standards and is regularly audited by
                  independent child protection experts.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      All staff undergo enhanced background checks and child
                      protection training
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Designated Safeguarding Lead available 24/7 for boarding
                      students
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Confidential reporting channels for students, parents, and
                      staff
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Regular welfare checks and age-appropriate counseling
                      services
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Strict visitor policies and secure campus perimeter with
                      CCTV monitoring
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <a href="#" className="text-blue-600 hover:underline">
                    Download our full Safeguarding Policy (PDF)
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Accreditations & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Recognized by leading educational bodies worldwide
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {accreditations.map((accreditation, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{accreditation}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
