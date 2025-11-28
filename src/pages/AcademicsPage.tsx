import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
import Button from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  BookOpen,
  Brain,
  Globe,
  Microscope,
  Calculator,
  Palette,
  Music,
  Award,
  Download,
  ChevronRight,
} from "lucide-react";

export function AcademicsPage() {
  const divisions = [
    {
      id: "creche",
      name: "Creche (Ages 1-3)",
      description:
        "Play-based learning with emphasis on motor skills, social interaction, and early language development.",
      highlights: [
        "Montessori-inspired",
        "Sensory activities",
        "Music & movement",
        "Parent partnership",
      ],
    },
    {
      id: "nursery",
      name: "Nursery (Ages 3-5)",
      description:
        "Foundation skills in literacy, numeracy, and creative expression through structured play.",
      highlights: [
        "Phonics & early reading",
        "Number concepts",
        "Arts & crafts",
        "Outdoor learning",
      ],
    },
    {
      id: "primary",
      name: "Primary (Years 1-6)",
      description:
        "Comprehensive curriculum aligned with national standards, plus enrichment in STEM, arts, and sports.",
      highlights: [
        "Cambridge Primary",
        "Coding from Year 3",
        "Swimming lessons",
        "Project-based learning",
      ],
    },
    {
      id: "secondary",
      name: "Secondary (Years 7-12)",
      description:
        "IGCSE and A-Level pathways with specialization tracks in sciences, humanities, and entrepreneurship.",
      highlights: [
        "IGCSE & A-Levels",
        "AI-assisted tutoring",
        "University counseling",
        "Research projects",
      ],
    },
  ];

  const subjects = [
    { icon: Calculator, name: "Mathematics & Further Maths", category: "STEM" },
    {
      icon: Microscope,
      name: "Sciences (Physics, Chemistry, Biology)",
      category: "STEM",
    },
    { icon: Brain, name: "Computer Science & Robotics", category: "STEM" },
    { icon: Globe, name: "Geography & Economics", category: "Humanities" },
    { icon: BookOpen, name: "English & Literature", category: "Humanities" },
    { icon: Palette, name: "Visual Arts & Design", category: "Arts" },
    { icon: Music, name: "Music & Performing Arts", category: "Arts" },
  ];

  const assessmentPrinciples = [
    "Continuous formative assessment to guide learning",
    "Summative exams at end of each term",
    "Project-based portfolios for entrepreneurship",
    "Sports performance analytics as part of PE assessment",
    "Digital badges and micro-credentials for skills mastery",
    "Parent-teacher conferences twice per year",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Academics
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              World-Class Curriculum, Personalized Learning
            </h1>
            <p className="text-xl text-gray-200">
              Our rigorous academic program combines national and international
              standards with AI-assisted personalization, ensuring every student
              reaches their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">
                Our Academic Philosophy
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Arenas, we believe that true education goes beyond rote
                memorization. Our curriculum is designed to develop critical
                thinking, creativity, and a lifelong love of learning.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We blend the best of Nigerian national curriculum with Cambridge
                International standards, enriched by AI-powered adaptive
                learning tools that provide personalized support and challenge
                for each student.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Small class sizes (max 18 students) for individualized
                    attention
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    AI tutoring assistants available 24/7 for homework help
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Project-based learning connecting subjects to real-world
                    challenges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Regular enrichment: coding clubs, debate society, science
                    fairs
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTQ4NzA4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Academic Divisions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored learning journeys from ages 1 to 18
            </p> 
          </div>
          <Tabs defaultValue="primary" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {divisions.map((division) => (
                <TabsTrigger key={division.id} value={division.id}>
                  {division.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {divisions.map((division) => (
              <TabsContent key={division.id} value={division.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-3xl mb-4 text-gray-900">
                      {division.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {division.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {division.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg"
                        >
                          <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Subjects & Enrichment
            </h2>
            <p className="text-xl text-gray-600">
              A broad curriculum covering STEM, humanities, and the arts
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <subject.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="mb-2">{subject.category}</span>
                      <h3 className="text-gray-900">{subject.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Reporting */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Assessment & Reporting
              </h2>
              <p className="text-xl text-gray-600">
                Fair, transparent, and developmental evaluation
              </p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl mb-4 text-gray-900">
                      Our Approach
                    </h3>
                    <ul className="space-y-3">
                      {assessmentPrinciples.map((principle, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-4 text-gray-900">
                      Grading Scale
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-700">A (Distinction)</span>
                        <span className="px-2 rounded-lg bg-black text-white">
                          70-100%
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-700">B (Merit)</span>
                        <span className="px-2 rounded-lg bg-gray-200">
                          60-69%
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-700">C (Credit)</span>
                        <span className="px-2 rounded-lg bg-gray-200">
                          50-59%
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-700">D (Pass)</span>
                        <span className="px-2 rounded-lg bg-gray-200">
                          40-49%
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-700">F (Fail)</span>
                        <span className="px-2 rounded-lg border border-gray-300">
                          0-39%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Reports issued at end of each term with detailed comments
                      and next steps for improvement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Request Our Full Curriculum Pack
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed syllabi, sample timetables, and assessment policies for
            all year groups.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Download Curriculum Pack"
              icon={<Download size={16} />}
              iconPosition="left"
              className="cursor-pointer"
            />
            <Button
              text="Schedule Academic Tour"
              className="cursor-pointer"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
