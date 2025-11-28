import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import Button from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  CheckCircle,
  FileText,
  Calendar,
  CreditCard,
  Upload,
  ArrowRight,
} from "lucide-react";




export function AdmissionsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const steps = [
    {
      icon: FileText,
      title: "1. Submit Inquiry",
      description:
        "Complete our online application form with student and parent information",
    },
    {
      icon: CheckCircle,
      title: "2. Assessment",
      description:
        "Student takes age-appropriate entrance assessment (academic & sports trial)",
    },
    {
      icon: Calendar,
      title: "3. Interview",
      description:
        "Meet with admissions team and tour the campus (virtual or in-person)",
    },
    {
      icon: CreditCard,
      title: "4. Offer & Payment",
      description:
        "Receive decision, accept offer, and pay registration fee to secure place",
    },
  ];

  const documents = [
    "Birth certificate (certified copy)",
    "Previous school reports (last 2 years)",
    "Medical report and immunization card",
    "Recent passport-size photograph",
    "Parent/Guardian ID (driver's license or passport)",
    "Proof of residence (utility bill)",
  ];

  const fees = [
    { item: "Tuition (per term)", amount: "₦850,000" },
    { item: "Boarding (per term)", amount: "₦450,000" },
    { item: "Transport/Bus (per term)", amount: "₦75,000" },
    { item: "Uniform & Books (one-time)", amount: "₦120,000" },
    { item: "Registration Fee (one-time)", amount: "₦50,000" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
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
                  className="bg-white text-blue-900 hover:bg-gray-100"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
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



function ApplicationForm({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert(
      "Thank you! Your application has been submitted. Our admissions team will contact you within 48 hours."
    );
    onClose();
  };

  const baseInput =
    "w-full bg-gray-300 border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:border-blue-500 focus:ring-blue-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* ----------------------------- */}
      {/* STUDENT INFORMATION           */}
      {/* ----------------------------- */}
      <div className="space-y-4">
        <h3 className="text-lg text-gray-900">Student Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="studentFirstName" className="text-black">
              First Name *
            </Label>
            <input
              id="studentFirstName"
              {...register("studentFirstName", { required: true })}
              className={baseInput}
            />
            {errors.studentFirstName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <Label htmlFor="studentLastName" className="text-black">
              Last Name *
            </Label>
            <input
              id="studentLastName"
              {...register("studentLastName", { required: true })}
              className={baseInput}
            />
            {errors.studentLastName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="dateOfBirth" className="text-black">
              Date of Birth *
            </Label>
            <input
              type="date"
              id="dateOfBirth"
              {...register("dateOfBirth", { required: true })}
              className={baseInput}
            />
            {errors.dateOfBirth && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <Label htmlFor="gender" className="text-black">
              Gender *
            </Label>
            <select
              id="gender"
              {...register("gender", { required: true })}
              className="w-full border border-gray-300 p-2 rounded bg-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <Label htmlFor="yearGroup" className="text-black">
              Year Group *
            </Label>
            <select
              id="yearGroup"
              {...register("yearGroup", { required: true })}
              className="w-full border border-gray-300 p-2 rounded bg-white focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="nursery">Nursery</option>
              <option value="year1">Year 1</option>
              <option value="year2">Year 2</option>
              <option value="year3">Year 3</option>
              <option value="year7">Year 7</option>
              <option value="year10">Year 10</option>
            </select>
            {errors.yearGroup && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>
      </div>

      {/* ----------------------------- */}
      {/* PARENT INFORMATION            */}
      {/* ----------------------------- */}

      <div className="space-y-4">
        <h3 className="text-lg text-gray-900">Parent/Guardian Information</h3>

        <div>
          <Label htmlFor="parentName" className="text-black">
            Full Name *
          </Label>
          <input
            id="parentName"
            {...register("parentName", { required: true })}
            className={baseInput}
          />
          {errors.parentName && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="parentEmail" className="text-black">
              Email *
            </Label>
            <input
              type="email"
              id="parentEmail"
              {...register("parentEmail", { required: true })}
              className={baseInput}
            />
            {errors.parentEmail && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <Label htmlFor="parentPhone" className="text-black">
              Phone Number *
            </Label>
            <input
              type="tel"
              id="parentPhone"
              {...register("parentPhone", { required: true })}
              className={baseInput}
            />
            {errors.parentPhone && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="address" className="text-black">
            Home Address *
          </Label>
          <textarea
            id="address"
            {...register("address", { required: true })}
            className={baseInput}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
      </div>

      {/* ----------------------------- */}
      {/* ADDITIONAL INFORMATION        */}
      {/* ----------------------------- */}

      <div className="space-y-4">
        <h3 className="text-lg text-gray-900">Additional Information</h3>

        <div>
          <Label htmlFor="previousSchool" className="text-black">
            Previous School (if applicable)
          </Label>
          <input
            id="previousSchool"
            {...register("previousSchool")}
            className={baseInput}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="boardingPreference" className="text-black">
              Boarding Preference *
            </Label>
            <select
              id="boardingPreference"
              {...register("boardingPreference", { required: true })}
              className="w-full border border-gray-300 p-2 rounded bg-white focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="boarding">Boarding (Full-time)</option>
              <option value="day">Day Student</option>
            </select>
            {errors.boardingPreference && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <Label htmlFor="busRequired" className="text-black">
              School Bus Required? *
            </Label>
            <select
              id="busRequired"
              {...register("busRequired", { required: true })}
              className="w-full border border-gray-300 p-2 rounded bg-white focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.busRequired && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="medicalConditions" className="text-black">
            Medical Conditions / Allergies
          </Label>
          <textarea
            id="medicalConditions"
            {...register("medicalConditions")}
            className={baseInput}
            placeholder="Please list any medical conditions, allergies, or dietary restrictions"
          />
        </div>

        <div>
          <Label htmlFor="specialNeeds" className="text-black">
            Special Educational Needs / Support Required
          </Label>
          <textarea
            id="specialNeeds"
            {...register("specialNeeds")}
            className={baseInput}
            placeholder="Describe any learning support needed"
          />
        </div>
      </div>

      {/* ----------------------------- */}
      {/* SUBMIT AREA                   */}
      {/* ----------------------------- */}

      <div className="border-t pt-6">
        <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 rounded-lg">
          <Upload className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-gray-900 mb-1">Document Upload</p>
            <p className="text-xs text-gray-600">
              After submitting this form, you'll receive an email with a secure
              link to upload required documents.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white p-3 rounded bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}

export default ApplicationForm;

