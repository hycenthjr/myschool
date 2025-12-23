import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const VendorMessages = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Customer Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Customer inquiries and communication would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorMessages;
