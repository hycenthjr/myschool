import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Inventory = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Medical Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Medicine and supplies inventory management would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
