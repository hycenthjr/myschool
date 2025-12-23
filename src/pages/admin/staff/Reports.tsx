import Button from "../../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Reports = () => {
  return (
    <div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Class Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  class: "Year 10A",
                  avgGrade: 85,
                  attendance: 95,
                  topStudent: "Amina Mohammed",
                },
                {
                  class: "Year 11B",
                  avgGrade: 82,
                  attendance: 92,
                  topStudent: "David Okonkwo",
                },
                {
                  class: "Year 10B",
                  avgGrade: 80,
                  attendance: 94,
                  topStudent: "Grace Eze",
                },
                {
                  class: "Year 12A",
                  avgGrade: 88,
                  attendance: 97,
                  topStudent: "Chioma Okafor",
                },
              ].map((classData, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-lg text-gray-900">{classData.class}</p>
                    <Button text="View Details" variant="outline" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Avg Grade</p>
                      <p className="text-xl text-gray-900">
                        {classData.avgGrade}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Attendance</p>
                      <p className="text-xl text-gray-900">
                        {classData.attendance}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Top Student</p>
                      <p className="text-sm text-gray-900">
                        {classData.topStudent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  title: "Term 1 Progress Reports",
                  date: "Oct 2025",
                  status: "Ready",
                },
                {
                  title: "Weekly Performance Summary",
                  date: "Week of Oct 25",
                  status: "Ready",
                },
                {
                  title: "Attendance Analysis",
                  date: "October 2025",
                  status: "Ready",
                },
              ].map((report, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="text-gray-900">{report.title}</p>
                    <p className="text-sm text-gray-600">{report.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-700">
                      {report.status}
                    </span>
                    <Button text="Download" variant="outline" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
