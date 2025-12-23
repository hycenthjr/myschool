import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const VendorReports = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Financial Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Sales reports, revenue analytics, and financial statements would be
            displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorReports;
