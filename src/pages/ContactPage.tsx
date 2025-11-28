import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
import Button from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Have questions? We're here to help. Reach out to our admissions
              team or schedule a campus visit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-6 text-gray-900">Send us a message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Admissions Inquiry" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <Button
                      text="Send Message"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="text-lg mb-2 text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Covenant Estate Garden
                    <br />
                    Dutse Apo
                    <br />
                    Abuja, Nigeria
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Phone className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="text-lg mb-2 text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    +234 800 ARENAS 1<br />
                    +234 1 234 5678
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Mail className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="text-lg mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    admissions@arenas.edu.ng
                    <br />
                    info@arenas.edu.ng
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Clock className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="text-lg mb-2 text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 8:00 AM - 5:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
