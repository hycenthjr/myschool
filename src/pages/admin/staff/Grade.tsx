import Button from "../../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Grade = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Grade Entry - Year 10A Mathematics</CardTitle>
            <Button text="Save Grades" className="gap-2" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Chioma Okafor",
                assignment1: 85,
                assignment2: 90,
                midterm: 87,
                project: 92,
              },
              {
                name: "Tunde Adeyemi",
                assignment1: 78,
                assignment2: 82,
                midterm: 80,
                project: 85,
              },
              {
                name: "Amina Mohammed",
                assignment1: 92,
                assignment2: 88,
                midterm: 90,
                project: 95,
              },
              {
                name: "James Wilson",
                assignment1: 75,
                assignment2: 79,
                midterm: 77,
                project: 80,
              },
              {
                name: "Fatima Ibrahim",
                assignment1: 88,
                assignment2: 90,
                midterm: 89,
                project: 91,
              },
            ].map((student, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-900 mb-3">{student.name}</p>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      Assignment 1
                    </label>
                    <input
                      type="number"
                      defaultValue={student.assignment1}
                      className="w-full mt-1 px-3 py-2 border rounded"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Assignment 2
                    </label>
                    <input
                      type="number"
                      defaultValue={student.assignment2}
                      className="w-full mt-1 px-3 py-2 border rounded"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Midterm</label>
                    <input
                      type="number"
                      defaultValue={student.midterm}
                      className="w-full mt-1 px-3 py-2 border rounded"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Project</label>
                    <input
                      type="number"
                      defaultValue={student.project}
                      className="w-full mt-1 px-3 py-2 border rounded"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Current Average:
                  </span>
                  <span className="text-lg text-gray-900">
                    {Math.round(
                      (student.assignment1 +
                        student.assignment2 +
                        student.midterm +
                        student.project) /
                        4
                    )}
                    %
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Grade;
