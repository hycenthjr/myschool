import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const BusRoutes = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Route Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Route planning, stops, and optimization would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusRoutes;
