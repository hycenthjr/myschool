import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Sales = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sales Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Detailed sales analytics and performance metrics would be displayed
            here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sales;
