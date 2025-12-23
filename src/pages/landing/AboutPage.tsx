import { Card, CardContent } from "../../ui/card";
// import { Badge } from "../components/ui/badge";
import { Shield, Award, CheckCircle } from "lucide-react";
import {
  leaders,
  views,
  values,
  accreditations,
} from "../../lib/landing/aboutPageData";

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url(./assets/GRG_9921.jpg)] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
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

      {/* Mission, Vision, Aim, & Purpose */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {views.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 rounded-lg ${value.bg} flex items-center justify-center mb-6`}
                  >
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h2 className="text-3xl mb-4 text-gray-900">{value.title}</h2>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <p className="text-center"></p>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        {/* Story */}
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

        {/* Create The Life You Want */}
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 text-center">
              Create The Life You Want
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Arenas Group of Schools is a valuable educational institution
                that provides students with a comprehensive education that goes
                beyond traditional academics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Focusing on sports and entrepreneurship offers a unique and
                valuable educational experience for students. By combining
                traditional academic learning with practical skills in sports
                and entrepreneurship, students are equipped with a well-rounded
                education that prepares them for success in various aspects of
                life. We are model to stand out and help our students Create the
                lives they want.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Arenas Group of Schools stands out as a pioneering educational
                institution, offering a holistic learning experience that
                extends far beyond traditional academics. Our innovative
                approach combines rigorous academic programs with specialized
                training in sports and entrepreneurship, equipping students with
                a unique set of skills that prepare them for excellence in all
                aspects of life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-bold">A Well-Rounded Education</span>
                <br />
                By integrating practical skills in sports and entrepreneurship
                into our curriculum, we provide students with a distinctive
                educational experience that fosters:
                <ul className="mt-4">
                  <li>- Academic excellence</li>
                  <li>- Physical and mental well-being through sports</li>
                  <li>- Business acumen and entrepreneurial spirit</li>
                  <li>- Critical thinking and problem-solving skills</li>
                  <li>- Collaboration and teamwork</li>
                </ul>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-bold">Unleashing Student Potential</span>
                <br />
                At Arenas Group of Schools, we empower students to create the
                lives they want. Our model focuses on:
                <ul className="mt-4">
                  <li>- Nurturing individual talents and passions</li>
                  <li>- Developing innovative thinking and creativity</li>
                  <li>- Building resilience and perseverance</li>
                  <li>- Cultivating leadership and teamwork skills</li>
                  <li>
                    - Preparing students for an ever-changing global landscape
                  </li>
                </ul>
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold">
                  Join the Arenas Group of Schools Community
                </span>
                <br />
                By choosing Arenas Group of Schools, you're investing in a
                comprehensive education that prepares your child for success.
                Join our community of innovators, entrepreneurs, and champions,
                and watch your child thrive in an environment that fosters
                growth, exploration, and achievement.
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
            {leaders.slice(0, 1).map((leader, index) => (
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
