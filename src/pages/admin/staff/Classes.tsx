import Button from "../../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Classes = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            name: "Year 10A - Mathematics",
            students: 20,
            schedule: "Mon, Wed, Fri 8:00 AM",
          },
          {
            name: "Year 11B - Mathematics",
            students: 18,
            schedule: "Tue, Thu 9:30 AM",
          },
          {
            name: "Year 10B - Mathematics",
            students: 22,
            schedule: "Mon, Wed 11:00 AM",
          },
          {
            name: "Year 12A - Further Maths",
            students: 15,
            schedule: "Tue, Thu 2:00 PM",
          },
        ].map((classInfo, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base">{classInfo.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Students</span>
                  <span className="text-gray-900">{classInfo.students}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Schedule</span>
                  <span className="text-gray-900">{classInfo.schedule}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button text="View Roster" variant="outline" />
                  <Button text="Lesson Plans" variant="outline" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
