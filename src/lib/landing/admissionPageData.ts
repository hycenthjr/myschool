import {
  CheckCircle,
  FileText,
  Calendar,
  CreditCard,
} from "lucide-react";

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

export {steps, documents, fees};