import { Upload } from "lucide-react";
import { Label } from "../../ui/label";
import { useForm } from "react-hook-form";

function ApplicationForm({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Application data: ", data);
    alert(
      "Thank you! Your application has been submitted. Our admissions team will contact you within 48 hours."
    );
    onClose();
  };

  const baseInput =
    "w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-sm text-black outline-none focus:border-blue-500 focus:ring-blue-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* ----------------------------- */}
      {/* STUDENT INFORMATION           */}
      {/* ----------------------------- */}
      <div className="space-y-4">
        <h3 className="text-lg text-gray-900">Student Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="studentFirstName">First Name *</Label>
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
            <Label htmlFor="studentLastName">Last Name *</Label>
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
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
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
            <Label htmlFor="gender">Gender *</Label>
            <select
              id="gender"
              {...register("gender", { required: true })}
              className={baseInput}
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
            <Label htmlFor="yearGroup">Year Group *</Label>
            <select
              id="yearGroup"
              {...register("yearGroup", { required: true })}
              // className="w-full border border-gray-300 p-2 rounded bg-white focus:border-blue-500 focus:ring-blue-500"
              className={baseInput}
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
          <Label htmlFor="parentName">Full Name *</Label>
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
            <Label htmlFor="parentEmail">Email *</Label>
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
            <Label htmlFor="parentPhone">Phone Number *</Label>
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
          <Label htmlFor="address">Home Address *</Label>
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
          <Label htmlFor="previousSchool">
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
            <Label htmlFor="boardingPreference">Boarding Preference *</Label>
            <select
              id="boardingPreference"
              {...register("boardingPreference", { required: true })}
              // className="w-full border border-gray-300 p-2 rounded bg-white focus:border-blue-500 focus:ring-blue-500"
              className={baseInput}
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
            <Label htmlFor="busRequired">School Bus Required? *</Label>
            <select
              id="busRequired"
              {...register("busRequired", { required: true })}
              // className="w-full border border-gray-300 p-2 rounded bg-white focus:border-blue-500 focus:ring-blue-500"
              className={baseInput}
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
          <Label htmlFor="medicalConditions">
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
          <Label htmlFor="specialNeeds">
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