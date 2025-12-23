import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Schedule = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Training & Match Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Complete calendar with training sessions and matches would be
            displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;
