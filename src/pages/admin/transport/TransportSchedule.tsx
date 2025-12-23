import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const TransportSchedule = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Trip Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Daily, weekly, and monthly trip schedules would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransportSchedule;
