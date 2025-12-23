import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Appointment = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Appointment Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Appointment scheduling and management system would be displayed
            here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Appointment;
