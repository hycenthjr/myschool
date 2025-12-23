import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Maintenance = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Schedule & Records</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Complete maintenance history and scheduling would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Maintenance;
