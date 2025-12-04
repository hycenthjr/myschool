import { Link, useNavigate } from "react-router";
import Button from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Badge from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Heart,
  GraduationCap,
  BookOpen,
  Trophy,
  Users,
  CheckCircle,
  Building,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export function DonatePage() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<string>("");

  const suggestedAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

  const donationCategories = [
    {
      id: "scholarship",
      title: "Scholarship Fund",
      description:
        "Help provide quality education to deserving students who need financial support.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      impact: "₦50,000 supports one student for one term",
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description:
        "Contribute to building world-class facilities including labs, sports centers, and dormitories.",
      icon: Building,
      color: "from-purple-500 to-pink-500",
      impact: "₦100,000 helps upgrade learning facilities",
    },
    {
      id: "sports",
      title: "Sports Excellence Program",
      description:
        "Support our athletic programs with equipment, coaching, and competition participation.",
      icon: Trophy,
      color: "from-orange-500 to-red-500",
      impact: "₦25,000 provides sports equipment",
    },
    {
      id: "books",
      title: "Library & Learning Resources",
      description:
        "Expand our collection of books, digital resources, and educational materials.",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      impact: "₦10,000 adds new books to library",
    },
  ];

  const impactStats = [
    { number: "250+", label: "Students Supported", icon: Users },
    { number: "₦15M", label: "Raised This Year", icon: Heart },
    { number: "85%", label: "Scholarship Recipients", icon: GraduationCap },
    { number: "12", label: "New Facilities Built", icon: Building },
  ];

  const handleProceedToCheckout = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && donationType) {
      navigate("/donate/checkout", {
        state: {
          amount,
          donationType,
          category: donationCategories.find((c) => c.id === donationType)
            ?.title,
        },
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 border-white/30">
              Make an Impact
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6 text-white">
              Invest in the Future
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Your donation helps us provide world-class education, sports
              training, and entrepreneurship opportunities to the next
              generation of leaders.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Heart className="h-6 w-6 text-pink-200" />
              <span className="text-lg">
                Every contribution makes a difference
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Choose Your Impact Area
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select where you'd like your donation to make the most difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {donationCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all ${
                    donationType === category.id
                      ? "ring-2 ring-blue-600 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setDonationType(category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="donationType"
                        checked={donationType === category.id}
                        onChange={() => setDonationType(category.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`h-12 w-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl text-gray-900">
                            {category.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {category.description}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {category.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Donation Amount */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Select Your Donation Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Suggested Amounts */}
              <div>
                <Label className="mb-3 block">Suggested Amounts</Label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {suggestedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      text={`₦${(amount / 1000).toFixed(0)}K`}
                      variant={
                        selectedAmount === amount ? "primary" : "outline"
                      }
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className="h-auto py-3"
                    />
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <Label htmlFor="customAmount">Or Enter Custom Amount (₦)</Label>
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </div>

              {/* Donor Information */}
              <div className="border-t pt-6">
                <h3 className="text-gray-900 mb-4">
                  Donor Information (Optional)
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donorName">Full Name</Label>
                      <Input id="donorName" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="donorEmail">Email Address</Label>
                      <Input
                        id="donorEmail"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave a message of support..."
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <label
                      htmlFor="anonymous"
                      className="text-sm text-gray-700"
                    >
                      Make this donation anonymous
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="monthly" />
                    <label htmlFor="monthly" className="text-sm text-gray-700">
                      Make this a monthly recurring donation
                    </label>
                  </div>
                </div>
              </div>

              {/* Proceed Button */}
              <Button
                text="Proceed to Payment"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="left"
                className="w-full gap-2"
                onClick={handleProceedToCheckout}
                disabled={!donationType || (!selectedAmount && !customAmount)}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600">
              See how donations are changing lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Thanks to the scholarship fund, I'm now pursuing my dream of becoming an engineer. The support has been life-changing.",
                author: "Chioma A.",
                role: "Scholarship Recipient, Year 11",
              },
              {
                quote:
                  "The new sports facilities funded by donors have taken our training to international standards. We're competing globally now!",
                author: "David O.",
                role: "Arenas FC Captain",
              },
              {
                quote:
                  "The library renovation has given us access to thousands of books and digital resources. My grades have improved significantly.",
                author: "Amara N.",
                role: "Year 10 Student",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            Have Questions About Donating?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you make the biggest impact possible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                text="Contact Us"
                className="bg-white text-blue-600 hover:bg-gray-100"
              />
            </Link>
            <Link to="/">
              <Button
                text="Back to Home"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
