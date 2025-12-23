import { useParams, Link } from "react-router";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import Badge from "../../ui/badge";

// News data - in a real app, this would come from a database
const newsArticles = {
  "arenas-bc-wins-championship": {
    id: "arenas-bc-wins-championship",
    image:
      "https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzYxNDg2OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Arenas BC Wins Regional Championship",
    date: "October 15, 2025",
    category: "Sports",
    excerpt:
      "Our basketball team brought home the trophy after an intense final match. Three players selected for national trials.",
    content: `
      <p>In a thrilling display of skill and teamwork, Arenas BC secured the Regional Basketball Championship title on Sunday, defeating defending champions Lagos Elite Academy 78-72 in a nail-biting final match.</p>
      
      <p>The game, held at the National Stadium in Abuja, saw our students demonstrate the exceptional training and dedication that has become the hallmark of Arenas sports programs. Led by team captain Emmanuel Okoro (Year 12), who scored 28 points, the team showed remarkable composure under pressure.</p>
      
      <h3>Outstanding Performances</h3>
      <p>Several players delivered career-best performances:</p>
      <ul>
        <li><strong>Emmanuel Okoro</strong> - 28 points, 7 rebounds, 5 assists</li>
        <li><strong>Chioma Eze</strong> - 18 points, 12 rebounds</li>
        <li><strong>David Adeleke</strong> - 16 points, 8 assists</li>
      </ul>
      
      <h3>National Team Selection</h3>
      <p>Following their outstanding performances, three of our players have been selected for national team trials:</p>
      <ul>
        <li>Emmanuel Okoro - U-19 National Team</li>
        <li>Chioma Eze - U-17 Women's National Team</li>
        <li>David Adeleke - U-19 National Team</li>
      </ul>
      
      <p>Coach Williams expressed his pride: "This championship is the result of months of hard work, dedication, and the excellent facilities at Arenas. Our students have access to professional-level training and analytics that give them a competitive edge."</p>
      
      <h3>What's Next</h3>
      <p>The team will now represent the Central Region at the National Basketball Championships in Lagos next month. They'll be training intensively using our sports analytics platform to analyze opponent strategies and optimize their game plans.</p>
      
      <p>Congratulations to the entire team, coaching staff, and everyone who supported them on this incredible journey!</p>
    `,
  },
  "ai-learning-lab-opens": {
    id: "ai-learning-lab-opens",
    image:
      "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWJ8ZW58MXx8fHwxNzYxNDg3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "New AI Learning Lab Opens",
    date: "October 10, 2025",
    category: "Academics",
    excerpt:
      "State-of-the-art AI lab with 30 workstations now available for coding and robotics students.",
    content: `
      <p>Arenas Group of Schools is proud to announce the opening of our new Artificial Intelligence Learning Lab, a cutting-edge facility designed to prepare our students for the technology-driven future.</p>
      
      <p>The lab, which officially opened its doors on Monday, features 30 high-performance workstations equipped with the latest AI development tools, robotics kits, and machine learning platforms.</p>
      
      <h3>World-Class Facilities</h3>
      <p>The AI Learning Lab includes:</p>
      <ul>
        <li>30 workstations with NVIDIA GPUs for AI training</li>
        <li>Industrial robotics arms for automation projects</li>
        <li>3D printing stations for prototyping</li>
        <li>Virtual reality development area</li>
        <li>Dedicated server room for cloud computing projects</li>
      </ul>
      
      <h3>Curriculum Integration</h3>
      <p>The lab will support our expanded computer science curriculum, which now includes:</p>
      <ul>
        <li>Introduction to Machine Learning (Year 9+)</li>
        <li>Computer Vision and Image Processing (Year 10+)</li>
        <li>Natural Language Processing (Year 11+)</li>
        <li>Robotics and Automation (All years)</li>
      </ul>
      
      <p>Dr. Adeyemi, Head of Technology, shared: "This lab positions Arenas at the forefront of tech education in Nigeria. Our students will graduate with hands-on experience in AI, preparing them for university programs and careers in technology."</p>
      
      <h3>Student Projects Already Underway</h3>
      <p>Several exciting projects are already in development:</p>
      <ul>
        <li>An AI-powered attendance system using facial recognition</li>
        <li>A chatbot for answering student questions about campus life</li>
        <li>A machine learning model to predict sports performance</li>
        <li>An automated greenhouse system for our sustainability garden</li>
      </ul>
      
      <p>The lab is open to all students from Year 7 onwards, with introductory workshops running throughout November.</p>
    `,
  },
  "student-ventures-2m": {
    id: "student-ventures-2m",
    image:
      "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudHJlcHJlbmV1cnNoaXB8ZW58MXx8fHwxNzYxNTIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Student Ventures Generate ₦2M in Q3",
    date: "October 5, 2025",
    category: "Entrepreneurship",
    excerpt:
      "Record quarter for our incubator marketplace. Five student businesses hit profitability.",
    content: `
      <p>The Arenas Maker-Incubator program has reached a major milestone, with student ventures generating over ₦2 million in revenue during Q3 2025, marking the most successful quarter since the program's inception.</p>
      
      <p>The achievement demonstrates the effectiveness of our hands-on entrepreneurship curriculum and real-world business experience provided through the Arenas Marketplace platform.</p>
      
      <h3>Top Performing Ventures</h3>
      <p>Five student businesses achieved profitability this quarter:</p>
      
      <h4>1. Ada's Threads (₦680,000 revenue)</h4>
      <p>Founded by Adanna O. (Year 11), this fashion business specializes in custom school uniforms and accessories. The venture has expanded from serving fellow students to accepting orders from other schools in Abuja.</p>
      
      <h4>2. CodeKids Tutors (₦520,000 revenue)</h4>
      <p>Michael T. (Year 12) created an online platform offering coding lessons to primary school students. The business now serves 50+ students across Nigeria with plans to expand to Ghana.</p>
      
      <h4>3. Green Wheels (₦380,000 revenue)</h4>
      <p>Tunde A. (Alumni 2024) runs an electric scooter repair and conversion service. The business has grown to employ 3 full-time staff and recently registered as a formal company.</p>
      
      <h4>4. Fresh Bites Catering (₦240,000 revenue)</h4>
      <p>A student collective led by Grace N. (Year 10) provides healthy snack options and catering for school events, emphasizing nutrition and sustainability.</p>
      
      <h4>5. TechFix Solutions (₦180,000 revenue)</h4>
      <p>Peter K. (Year 11) offers device repair and IT support services to students, staff, and the local community.</p>
      
      <h3>Program Impact</h3>
      <p>The Maker-Incubator program now supports 47 active student ventures across three specialization tracks:</p>
      <ul>
        <li>Coding & Robotics (18 ventures)</li>
        <li>Fashion & Media (15 ventures)</li>
        <li>Automobile Mechatronics (14 ventures)</li>
      </ul>
      
      <h3>Mentorship and Support</h3>
      <p>Students receive ongoing support from 15 alumni and industry mentors who provide guidance on:</p>
      <ul>
        <li>Business strategy and planning</li>
        <li>Marketing and customer acquisition</li>
        <li>Financial management</li>
        <li>Product development</li>
        <li>Scaling operations</li>
      </ul>
      
      <p>Mr. Okonkwo, Director of Entrepreneurship, commented: "These results show that our students aren't just learning business theory—they're building real companies that generate revenue and create value. Many of these ventures will continue beyond graduation."</p>
      
      <h3>Looking Ahead</h3>
      <p>The next Entrepreneurship Pitch Competition is scheduled for November 18, where students will compete for ₦500,000 in seed funding to scale their ventures.</p>
    `,
  },
};

export function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  // const navigate = useNavigate();

  const article = slug ? newsArticles[slug as keyof typeof newsArticles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl mb-4 text-gray-900">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/news-events">
            <Button text="Back to News & Events" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-[400px] bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/news-events">
            <Button
              text="Back to News"
              icon={<ArrowLeft className="mr-2 h-4 w-4" />}
              iconPosition="left"
              variant="ghost"
              className="mb-6 text-white hover:text-white hover:bg-white/10"
            />
          </Link>

          {/* Article Card */}
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8 md:p-12">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="dark">{article.category}</Badge>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <Button
                  text="Share"
                  icon={<Share2 className="h-4 w-4" />}
                  variant="secondary"
                  className="ml-auto gap-2 cursor-pointer"
                  responsiveText={true}
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:my-4 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Related Actions */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl mb-4 text-gray-900">
                  Interested in Arenas?
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link to="/admissions">
                    <Button
                      text="Apply Now"
                      className="bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  </Link>
                  <Link to="/virtual-tour">
                    <Button text="Take Virtual Tour" variant="secondary" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to News Button */}
          <div className="my-8 text-center">
            <Link to="/news-events">
              <Button text="View All News & Events" variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
