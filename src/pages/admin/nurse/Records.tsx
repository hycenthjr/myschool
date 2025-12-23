import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Records = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Student Health Records</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Comprehensive health records and medical history would be displayed
            here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Records;
