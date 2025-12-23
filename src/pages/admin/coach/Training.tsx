import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Training = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Training Plans & Drills</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Training schedules, drills, and session planning would be displayed
            here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Training;
