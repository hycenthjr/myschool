import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Fleet = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Fleet Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Detailed fleet information and bus management would be displayed
            here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fleet;
