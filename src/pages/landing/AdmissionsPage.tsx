import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button";
import ApplicationForm from "../../components/landing/ApplicationForm";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { CheckCircle, ArrowRight } from "lucide-react";
import { documents, fees, steps } from "../../lib/landing/admissionPageData";

export function AdmissionsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url(./assets/GRG_7180.jpg)] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Admissions
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Join the Arenas Family
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Applications are now open for the January 2026 intake. Limited
              spaces available.
            </p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  text="Start Application"
                  icon={<ArrowRight className="ml-2 h-5 w-5" />}
                  iconPosition="right"
                />
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[71vh] mt-[2%] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gray-900">
                    Application Form
                  </DialogTitle>
                  <DialogDescription>
                    Complete the form below to begin your application to Arenas
                    Group of Schools.
                  </DialogDescription>
                </DialogHeader>
                <ApplicationForm onClose={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-12 bg-blue-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-3xl text-blue-600 mb-2">Jan 2026</div>
              <div className="text-gray-700">Next Intake</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2">Dec 1, 2025</div>
              <div className="text-gray-700">Application Deadline</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2">Limited</div>
              <div className="text-gray-700">Spaces Remaining</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to join Arenas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Document Checklist
              </h2>
              <p className="text-xl text-gray-600">
                Please have these documents ready before starting your
                application
              </p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    All documents can be uploaded as scanned copies or clear
                    photos in PDF, JPEG, or PNG format (max 5MB each).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees & Scholarships */}
      <section className="py-20" id="fees">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Fees & Scholarships
              </h2>
              <p className="text-xl text-gray-600">
                Transparent pricing and financial aid options
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-gray-900">
                    Fee Structure (2025/26)
                  </h3>
                  <div className="space-y-4">
                    {fees.map((fee, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0"
                      >
                        <span className="text-gray-700">{fee.item}</span>
                        <span className="text-gray-900">{fee.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900">
                        Total (Boarding, per term)
                      </span>
                      <span className="text-2xl text-blue-600">₦1,300,000</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Payment plans available. Three terms per academic year.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-gray-900">
                    Scholarships & Aid
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We believe talent should not be limited by finances. Arenas
                    offers several scholarship programs:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="text-gray-900 mb-1">
                        Academic Excellence
                      </h4>
                      <p className="text-sm text-gray-600">
                        Up to 50% tuition reduction for top performers
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="text-gray-900 mb-1">Sports Talent</h4>
                      <p className="text-sm text-gray-600">
                        Full scholarships for elite athletes (trial required)
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="text-gray-900 mb-1">Entrepreneurship</h4>
                      <p className="text-sm text-gray-600">
                        Partial scholarships for innovative business ideas
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="text-gray-900 mb-1">Need-Based Aid</h4>
                      <p className="text-sm text-gray-600">
                        Financial assistance based on family circumstances
                      </p>
                    </div>
                  </div>
                  <Button
                    text="Apply for Scholarship"
                    variant="outline"
                    className="w-full mt-6 cursor-pointer"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-gray-900">Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our admissions team is here to help. Book a virtual or in-person
              campus tour, or reach out directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                text="Schedule Campus Visit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer"
              />
              <Button
                text="Contact Admissions"
                className="cursor-pointer"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
