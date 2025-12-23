import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Emergency = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Emergency Procedures</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Emergency protocols and incident reporting would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Emergency;
